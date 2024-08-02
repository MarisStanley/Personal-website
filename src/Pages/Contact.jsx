import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../../src/Css/Contact.css";




function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.checkValidity()) {
      form.current.classList.add('was-validated');
      return;
    }

    emailjs.sendForm('service_rz72xeh', 'template_m97uidf', form.current, 'TI6Ky8XgoxhjdOHSQ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    form.current.reset();
    form.current.classList.remove('was-validated');
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
              type="email" className='email-field' placeholder='E-mail' required id="email"></input>
            <div className="invalid-feedback">
              Please enter a valid email.   
          </div>
         
            <textarea name="message" type="text" className='message-field' placeholder='Message' id="fixed" required ></textarea>
            <div className="invalid-feedback">
              Cannot send an empty message.
              </div>
         
          <button className='send-button' type="submit">SEND</button>
        </form>
        
      </div>
    </div>
  )
}

export default Contact

