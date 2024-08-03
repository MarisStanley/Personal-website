import React from 'react';
import "../../src/Css/About.css";



const About = () => {
    return (
      
                <div className='about-container'>
                    <h2 className="about-title">About Me</h2>
                    <div className="about-inner-container">

                        <div className='about-quote-section'>
                            <h3>The only way to do great work is to love what you do.</h3>
                            <h6>Steve Jobs</h6>
                        </div>

                        <p >I will not make you read through all of it, unelss you want to, of course.
                            As of July 2024, I am currently learning front-end development. My knowledge of CSS and HTML is good, though not great—still learning. As for JavaScript, I'd say I'm at the beginner stage, but...learning.
                        </p>
                        <p>
                            Still interested? Awesome!
                        </p>
                        <p>
                            I discovered the IT world in the spring of 2023 when I was somewhat lost in life and looking for direction. Something led me to front-end development. I took a JavaScript/React course and found that I really liked it. I've always loved puzzles and problem-solving, and the visual results of front-end work really appealed to me. A couple of months later, I joined Telia's Women In Tech program. I spent six months learning about UX, and while I really liked it, in January of 2024, after completing the UX course, I found myself back learning front-end. I started looking into CSS - something we did not learn much during the JS course. I gained more knowledge about jQuery and DOM. I then realized that while courses are fun, I needed to show something to potential employers as well. So, after lots of trial and error, this site was born. I am currently working on an e-store, just to remind myself what I learned during the JS course, and I've got an app idea for my son — though that's a project for another day.
                        </p>
                        <p>
                            In the past few years, I have experienced significant personal growth. I have become more mindful and have had many "aha" moments, which have made me realize that running a small business from a small town no longer works for me. I am now looking for opportunities to be part of something global.
                            I have worked in a startup environment before and I really liked it. Ideally, I would love to work for a bigger company.</p>
                        <p>
                            I am not stuck to front-end. I would love to learn Python and C languages and I find the gaming industry really fascinating as well.
                        </p>
                        <p>
                            If you're looking for someone who's passionate about tech, eager to learn, and ready to make a difference, let's connect!
                        </p>

                        <div className='about-buttons'>
                            <a href="/resume.pdf" download className='about-download-button'>Download CV</a>
                            <a href="/contact" className='about-getintouch'>Get In Touch</a>
                        </div>

                    </div>
                </div>
           
       
    );
}

export default About;
