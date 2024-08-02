import React, { useState, useRef } from 'react';
import "../../src/Css/Experience.css";

function Experience() {

  const [showMoreSoftSkills, setShowMoreSoftSkills] = useState(false);
  const [showMoreDesignSkills, setShowMoreDesignSkills] = useState(false);


  const softSkillsRef = useRef(null);
  const designSkillsRef = useRef(null);


  const toggleShowMore2 = () => {
    const newState = !showMoreSoftSkills;
    setShowMoreSoftSkills(newState);

    if (newState) {
      scrollToElement(softSkillsRef);
    }
  };

  const toggleShowMore1 = () => {
    const newState = !showMoreDesignSkills;

    setShowMoreDesignSkills(newState);
    if (newState) {
      scrollToElement(designSkillsRef);
    }
  };


  const scrollToElement = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <div>
      <div className="container" >

        <div className="left-side">
          <div className="about">
            <h2 className="title2">Experience</h2>
            <h4 className="title4">Work experience</h4>
            <div className="box">
              <div className="year_company">
                <h6> 11.2019 -  12.2023 / Võru, Estonia</h6>

                <h5>Saara Butiik OÜ  </h5>
              </div>
              <div className="text">
                <h4>Owner</h4>
                <p>Managed an e-store on a WordPress platform, oversaw social media
                  channels. Utilized effective customer communication strategies,
                  contributing to consistent 5-star reviews and enhanced customer
                  satisfaction. Handled end-to-end order processes, managed returns,
                  sourced suppliers, performed everyday bookkeeping and successfully
                  resolved customer complaints.</p>
              </div>
            </div>

            <div className="box">
              <div className="year_company">
                <h6>01.2018 - 11.2018 / Võru, Estonia</h6>
                <h5> Sisustuskoda OÜ</h5>
              </div>
              <div className="text">
                <h4>Digital Marketer</h4>
                <p> I managed an Instagram account, conducted property and furniture
                  photography, played a key role in significantly expanding the customer
                  base and provided translation services when required.</p>
              </div>
            </div>

            <div className="box">
              <div className="year_company">
                <h6> 06.2015 - 12.2015 / Tallinn, Estonia</h6>
                <h5> TransferWise Ltd  </h5>
              </div>
              <div className="text">
                <h4>Customer Support Specialist</h4>
                <p> Resolved customer complaints via various communication channels.
                  Prioritized understanding each customer's needs by thoroughly reading
                  through entire email conversations, allowing me to identify and resolve
                  complex issues. In a fast-paced startup environment, I assisted
                  colleagues and prioritized providing caring and effective solutions,
                  ensuring the utmost satisfaction of our customers.</p>
              </div>
            </div>

            <div className="box">
              <div className="year_company">
                <h6>04.2010 - 09.2020 / Charleston, SC, USA / Võru, Estonia</h6>
                <h5> Maris Stanley Photography</h5>
              </div>
              <div className="text">
                <h4>Owner / Photographer</h4>
                <p> I specialized in capturing portraits and weddings, edited photos using
                  Adobe Photoshop and Lightroom, delivered photos to clients, and
                  managed client meetings. My dedication and quality of service were
                  reflected in receiving 16 5-star reviews on WeddingWire.com and
                  earning the WeddingWire Brides Choice Award in 2012.</p>
              </div>
            </div>

            <div className="box">
              <div className="year_company">
                <h6>  02.2007- 12.2007 / Charleston, SC, USA</h6>
                <h5> Charleston Place Hotel    </h5>
              </div>
              <div className="text">
                <h4>Room Service Attendant</h4>
                <p> I made sure meals were delivered on time to guest rooms, and my
                  dedication to excellent service was  recognized during a surprise hotel
                  inspection. The hotel received several positive reviews, one of which
                  specifically praised my quick solution of an issue involving a mix-up
                  which highlighted my commitment to ensuring a high level of guest
                  satisfaction.</p>
              </div>
            </div>

            <div className="box">
              <div className="year_company">
                <h6>04.2004- 02.2007 / Charleston, SC, USA</h6>
                <h5> Comfort Suites Hotel</h5>
              </div>
              <div className="text">
                <h4>Front Desk Clerk</h4>
                <p> I handled check-ins and check-outs, ensured guest satisfaction, and
                  managed various administrative tasks. However, my role extended
                  beyond the desk. During evening shifts, I operated independently
                  during the busiest times. I took on various tasks, including some
                  maintenance duties.  baking cookies, folding laundry and, when
                  needed, returned to work around 4 am to prepare breakfast. This
                  multifaceted role showed my dedication and versatility in maintaining a
                  seamless guest experience.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <h2 className="title3">Experience</h2>
          <div className="career-growth">
            <h4 className="title">Career Growth</h4>
            <ul>
              <li>
                <h6>ONGOING</h6>
                <h5 className='sub-title'>The Complete 2024 Web
                  Development Bootcamp</h5>
                <h5 className='last-child'>Udemy</h5>
              </li>
              <li>
                <h6> 09.2023 -  01.2024</h6>
                <h5 className='sub-title'>UX Design Certificate</h5>
                <h5>Google</h5>
                <a href="/coursera.pdf" download>
                  <img src="download.png" alt="" />
                </a>
              </li>
              <li>
                <h6>05.2023 - 06.2023</h6>
                <h5 className='sub-title'>Intensive 200 hour
                  Javascript/React course</h5>
                <h5>Aurora Development</h5>
                <a href="/tunnistus.pdf" download>
                  <img src="download.png" alt="Download Certificate" />
                </a>
              </li>
            </ul>
          </div>

          <div className="skills-container ">
            <h4 className="title">Skills</h4>
            <div className="second-column" ref={softSkillsRef}>
              <h5>Soft Skills</h5>
              <ul className={`skills-list ${showMoreSoftSkills ? 'show-all' : ''}`}>
                <li className="skill">Client success ownership</li>
                <li className="skill">Client relationship management</li>
                <li className="skill">Proactive problem solving</li>
                <li className="skill">Effective communication</li>
                <li className="skill">Customer advocacy</li>
                <li className="skill">Remote collaboration</li>
                <li className="skill">Empathy and understanding</li>
                <li className="skill">Home-based business operations</li>
                <li className="skill">Cross-functional communication</li>
                <li className="skill">Teamwork</li>
                <li className="skill">Self-starter</li>
                <li className="skill">Detail-oriented</li>
                <li className="skill">Time management</li>
                <li className="skill">Financial management</li>
                <li className="skill">Adaptability</li>
              </ul>
              <button
                onClick={toggleShowMore2}
                className={`show-more-btn soft-skills-btn ${showMoreSoftSkills ? 'hidden' : ''}`}
              >     <img
                  src={showMoreSoftSkills ? "up.png" : "down.png"}
                  alt={showMoreSoftSkills ? 'Show less' : 'Show more'}
                />
              </button>
            </div>

            <div className="first-column" ref={designSkillsRef}>
              <h5>Design and Development</h5>
              <ul className={`skills-list ${showMoreDesignSkills ? 'show-all' : ''}`}>
                <li className="skill">CSS</li>
                <li className="skill">HTML</li>
                <li className="skill">JavaScript</li>
                <li className="skill">React</li>
                <li className="skill">Figma</li>
                <li className="skill">Wireframes</li>
                <li className="skill">Prototyping</li>
                <li className="skill">Mockups</li>
                <li className="skill">Usability testing</li>
                <li className="skill">User research</li>
                <li className="skill">Adobe Photoshop</li>
                <li className="skill">Creative Cloud</li>
                <li className="skill">Canva</li>
                <li className="skill">ChatGPT</li>
                <li className="skill">Leonardo.Ai</li>
                <li className="skill">CapCut</li>
              </ul>
              <button
                onClick={toggleShowMore1}
                className={`show-more-btn design-skills-btn ${showMoreDesignSkills ? 'hidden' : ''}`}
              >
                <img
                  src={showMoreDesignSkills ? "up.png" : "down.png"}
                  alt={showMoreDesignSkills ? 'Show less' : 'Show more'}
                />
              </button>
            </div>

          
          </div>
        </div>

      </div>
    </div>
  );
}
export default Experience;