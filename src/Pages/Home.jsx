import React from 'react'
import "../../src/Css/Home.css"

function Home() {
  return (
    <div>
      <div className="main-container">
      <div className="home-container-wrapper">
        <div className="home-container">
          <h6>Hello,</h6>
          <h1>
            <span className='first-part'>i'm</span>
            <span className='second-part'> MARIS  STANLEY</span>
          </h1>
          <h6 className='home-text'>and I like to code.</h6>
          <div className='home-buttons'>
          <a href="/MarisStanley_eng.pdf" download className='download-button'>DOWNLOAD CV</a>
          <a href="/about"  className='about-me-button'>ABOUT ME</a>
          </div>
        </div>
        </div>
        <div className="image-wrapper">
        <img className='home-image' src="profile.png" alt="Avatar" />
      </div>
      </div>
    </div>
  ) 
}

export default Home
