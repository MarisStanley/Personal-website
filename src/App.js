import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Experience from './Pages/Experience';
import About from './Pages/About';



import './App.css';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const sidenavRef = useRef(null);
  const backToTop = useRef(null);

  function handleClickOutside(event) {
    if (sidenavRef.current && !sidenavRef.current.contains(event.target) && event.target.id !== "menu-icon") {
      closeNav();
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
 


  return (
    <div ref={backToTop}>

      <div id="mySidenav" className="sidenav" ref={sidenavRef}>
        <button class="closebtn" onClick={closeNav}>&times;</button>
   <div className='sidenav-inner-container'>
        <a href="/" id="home">
          <div className='menu-items'>
            <img className='menu-home' src="home-icon.png" alt="home-icon" />
            <h3>Home</h3>
          </div>
        </a>

        <a href="/portfolio" id="portfolio">
          <div className='menu-items'>
            <img className='menu-portfolio' src="portfolio.png" alt="portfolio-icon" />
            <h3>Portfolio</h3>
          </div>
        </a>

        <a href="/experience" id="resume">
          <div className='menu-items'>
            <img className='menu-experience' src="experience.png" alt="resume-icon" />
            <h3>Experience</h3>
          </div>
        </a>

        <a href="/about" id="about">
          <div className='menu-items'>
            <img className='menu-about' src="aboutme-icon.png" alt="about-icon" />
            <h3>About Me</h3>
          </div>
        </a>

        <a href="/contact" id="contact">
          <div className='proov menu-items '>
            <img className='menu-contact' src="contact.png" alt="contact-icon" />
            <h3>Contact</h3>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/maris-stanley-user-experience-front-end/">
          <div className='menu-items menu-socialmedia'>
            <img className='menu-linkedin' src="linkedin-logo.png" alt="linkedin-logo-icon" />
            <h3>LinkedIn</h3>
          </div>
        </a>

        <a href="https://github.com/MarisStanley">
          <div className='menu-items menu-socialmedia1'>
            <img className='menu-github ' src="github-logo.png" alt="github-logo-icon" />
            <h3>GitHub</h3>
          </div>
        </a></div>

        <h3 className='menu-bottom-text'>Made with love by Maris Stanley <br />2024</h3>
      </div>

      {showScrollButton && (
        <img onClick={scrollToTop} className='scroll-to-top' src="up.png" alt="scroll-to-top-icon" />
      )}

      <header>

        <img className='menu-icon' onClick={openNav} src="hamburger.png" alt="hamburger-menu-icon" />

        <a href="/">
          <img className='logo' src="logo13.png" alt="" tabIndex="0" />
        </a>

      </header>


      <Routes>
        <Route path="" element={< Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div >
  );
}

export default App;
