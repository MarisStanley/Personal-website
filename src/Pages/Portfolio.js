import React from 'react';
import "../../src/Css/Portfolio.css";

function Portfolio() {
  return (
    <div className='portfolio-grid'>
      <h2 className='portfolio-title'>Portfolio</h2>

      <section className='portfolio-container first-container'>
        <div className='portfolio-container-left-side'>
          <picture>
            <source srcSet="viviene3.png" media="(max-width: 900px)" />
            <img className='portfolio-img' src="viviene3.png" alt="Viviene project" />
          </picture>
        </div>

        <div className='portfolio-container-right-side'>
          <h5 >A Work in Progress</h5>
          <div className='portfolio-logo'>
            <a href="" aria-label="GitHub repository">
              <div className='portfolio-link'>
                <img className='github-logo' src="github-logo.png" alt="GitHub logo" />
              </div>
            </a>
            <a href="https://vivienne-72e32.web.app/" aria-label="Project demo">
              <div className='portfolio-link'>
                <img className='link-logo' src="link.png" alt="LinkedIn logo" />
              </div>
            </a>
          </div>
          <p>
            This is the project I am working on at the moment. It will be some time before I am done,
            but so far I really like how it is looking. Design is my own, I like being
            creative and play around with different styles. This is so that I will go through
            the things I learned at the JavaScript/React course again. Photos are from Freepik.
          </p>
        </div>
      </section>

      <section className='portfolio-container second-container'>
        <div className='portfolio-container-left-side'>
          <picture>
            <source srcSet="portfolio-site1.png" media="(max-width: 900px)" />
            <img className='portfolio-img' src="portfolio-site1.png" alt="Portfolio website" />
          </picture>
        </div>
        <div className='portfolio-container-right-side'>
          <h5>Portfolio Website</h5>
          <div className='portfolio-logo'>
            <a href="" aria-label="GitHub repository">
              <div className='portfolio-link'>
                <img className='github-logo' src="github-logo.png" alt="GitHub logo" />
              </div>
            </a>
            <a href="https://marisstanley.com/" aria-label="Project demo">
              <div className='portfolio-link'>
                <img className='link-logo' src="link.png" alt="LinkedIn logo" />
              </div>
            </a>
          </div>
          <p>
            I have made so many versions of the page. I have changed it so many times, different styles, different designs.
            I did not want to just copy someone else; I wanted to make something that is...me. And I also wanted the design to look nice and clean. Also,
            the code needs to look the same.
          </p>
          <p>
            React · Visual Studio Code · Firebase · Emailjs · Leonardo Ai · Adobe Photoshop · Figma
          </p>
        </div>
      </section>

      <section className='portfolio-container third-container'>
        <div className='portfolio-container-left-side'>
          <picture>
            <source srcSet="beach4.png" media="(max-width: 900px)" />
            <img className='portfolio-img' src="beach4.png" alt="Beach project" />
          </picture>
        </div>
        <div className='portfolio-container-right-side'>
          <h5>Project</h5>
          <div className='portfolio-logo'>
            <a href="https://github.com/MarisStanley/React-koolitus/tree/main/projekt" aria-label="GitHub repository">
              <div className='portfolio-link'>
                <img className='github-logo' src="github-logo.png" alt="GitHub logo" />
              </div>
            </a>
            <a href="https://projekt-83054.web.app/" aria-label="Project demo">
              <div className='portfolio-link'>
                <img className='link-logo' src="link.png" alt="LinkedIn logo" />
              </div>
            </a>
          </div>
          <p>
            I created this page when I was taking part in the JavaScript/React course.
            Lots of JavaScript and React, but very little CSS, which means it is not responsive.
          </p>
          <p>
            React · Visual Studio Code · Firebase · Emailjs · Mui · React-i18next · Leaflet · Bootstrap
          </p>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
