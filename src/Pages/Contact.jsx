import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import DOMPurify from 'dompurify';
import "../../src/Css/Contact.css";




function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("sendEmail function triggered");

    if (!form.current.checkValidity()) {
      console.log("Form is not valid");
      form.current.classList.add('was-validated');
      return;
    }

    const sanitizedName = DOMPurify.sanitize(form.current.from_name.value);
    const sanitizedEmail = DOMPurify.sanitize(form.current.from_email.value);
    const sanitizedMessage = DOMPurify.sanitize(form.current.message.value);

    
    form.current.from_name.value = sanitizedName;
    form.current.from_email.value = sanitizedEmail;
    form.current.message.value = sanitizedMessage;


    emailjs.sendForm( 
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
      }, (error) => {
        console.log(error.text);
      });

    form.current.reset();
    form.current.classList.remove('was-validated');
    

  };

  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => {
        setFadeOut(true);
      }, 6000); 

      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      setMessageSent(false);
      setFadeOut(false);
    }, 300); 
  };


  return (
    <div>

      <div className='contact-container'>

        <h2 className='contact-title'>Contact</h2>
        <div className='contact-left-side'>
          <p >I am currently located in Võru,Estonia, but I am not opposed to movng to Norway.</p>
          <br />
          <p>
            <span className='white'>You can e-mail me at </span>
            <span className='gradient'> maris.stanley@yahoo.com </span>
            <span className='white'> or contact me by filling out the form. </span>
          </p>
          <div className='contact-socialmedia'>
            <a href="https://www.linkedin.com/in/maris-stanley-user-experience-front-end/">
              <img src="linkedin-logo.png" alt="linkedin-logo-icon" />
            </a>
            <a href="https://github.com/MarisStanley">
              <img src="github-logo.png" alt="github-logo-icon" />
            </a>
          </div>
        </div >

        <form className='contact-right-side' noValidate ref={form} onSubmit={sendEmail}>

          <input name="from_name" type='text' className='name-field' placeholder='Name' required id="name"></input>
          <div className="invalid-feedback">
            Valid  name is required.
          </div>

          <input name="from_email"
            type="email" className='email-field' placeholder='E-mail' required id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" ></input>
          <div className="invalid-feedback">
            Please enter a valid email.
          </div>

          <textarea name="message" type="text" className='message-field' placeholder='Message' id="fixed" required ></textarea>
          <div className="invalid-feedback">
            Cannot send an empty message.
          </div>

          <button className='send-button' type="submit">SEND</button>

          {messageSent && (
            <div
              className={`confirmation ${fadeOut ? 'fade-out' : ''}`}
            
            > <span className="closebtn" onClick={handleClose}>&times;</span>
              Message sent!
            </div>
          )}
        

        </form>

      </div>
    </div>
  )
}

export default Contact

