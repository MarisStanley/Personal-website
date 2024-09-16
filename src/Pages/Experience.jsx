import React, { useState, useRef } from "react";
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
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="left-side">
          <div className="about">
            <h2 className="title2">Experience</h2>
            <h4 className="title4">Work experience</h4>

            <div className="box">
              <div className="year_company">
                <h6> 2023 - PRESENT / Estonia</h6>
                <h5>Web Development </h5>
              </div>
              <div className="text">
                <h4>Web Development</h4>
                <p>
                  In the past year I have been actively working on my skills
                  through courses and direct experience, along with research and
                  problem-solving. I completed a personal website which I
                  created in Figma. Added Firebase hosting, a custom domain and
                  also an email sending feature. Currently, I am working on
                  creating an e-store to enhance my front-end development
                  skills. This project involves creating an engaging and
                  responsive user experience by utilizing HTML, CSS, JavaScript,
                  and React, while also applying principles of UX and UI design.
                  I am integrating shopping cart functionalities, developing a
                  user account system, and applying techniques to improve
                  website performance, including load times and responsiveness.
                </p>
              </div>
            </div>

            <div className="box">
              <div className="year_company">
                <h6> 2019 - 2023 / Estonia</h6>
                <h5>SAARA </h5>
              </div>
              <div className="text">
                <h4>E-commerce/Owner</h4>
                <p>
                  I took full responsibility for client success, ensuring
                  satisfaction with purchases and a positive shopping
                  experience. I built and maintained strong client relationships
                  through exceptional service, timely updates, and prompt
                  responses to inquiries. Managed the e-store's lifecycle from
                  order placement to delivery and returns. Drove engagement with
                  regular updates and promotions, and resolved issues swiftly to
                  ensure continuous customer satisfaction. Operated
                  independently, showcasing strong organizational and time
                  management skills.
                </p>
              </div>
            </div>

            <div className="box">
              <div className="year_company">
                <h6>2018 - 2018 / Estonia</h6>
                <h5> Sisustuskoda OÜ</h5>
              </div>
              <div className="text">
                <h4>Digital Marketer</h4>
                <p>
                  {" "}
                  I managed an Instagram account, conducted property and
                  furniture photography, played a key role in significantly
                  expanding the customer base and provided translation services
                  when required.
                </p>
              </div>
            </div>

            <div className="box">
              <div className="year_company">
                <h6>2017 - 2020 / Estonia</h6>
                <h5> Maris Stanley Photography</h5>
              </div>
              <div className="text">
                <h4>Owner / Photographer</h4>
                <p>
                  {" "}
                  I specialized in capturing portraits and weddings, edited
                  photos using Adobe Photoshop and Lightroom, delivered photos
                  to clients, and managed client meetings.{" "}
                </p>
              </div>
            </div>

            <div className="box">
              <div className="year_company">
                <h6> 2015 - 2017 / Estonia</h6>
                <h5> Wise PLC </h5>
              </div>
              <div className="text">
                <h4>Customer Support Specialist</h4>
                <p>
                  {" "}
                  Maintained Wise’s strong customer reputation by efficiently
                  managing urgent requests, providing clear and empathetic
                  communication, and balancing tasks like supporting customers,
                  troubleshooting issues, and ensuring quick resolutions. This
                  built long-term trust with clients and gave me a deep
                  understanding of customer needs. I consistently ensured a
                  positive customer experience by resolving complex complaints
                  through various channels like phone, email, and chat, always
                  focusing on customer satisfaction and offering solutions that
                  addressed individual needs. In addition to customer service I
                  assisted colleagues in a fast-paced, high-growth fintech
                  startup environment, prioritizing effective solutions and
                  customer advocacy. I also helped improve how things worked by
                  giving feedback on the tools we used. My role required strong
                  teamwork, particularly in a remote setting, where I worked
                  with both local and international teams to ensure consistent,
                  high-quality service for customers across various regions.{" "}
                </p>
              </div>
            </div>

            <div className="box">
              <div className="year_company">
                <h6>2004 - 2015 / USA / Estonia</h6>
                <h5> Transferrable Skills</h5>
              </div>
              <div className="text">
                <h4>Time Management & Multitasking</h4>
                <p>
                  Managed everything from client meetings to editing and
                  delivering photos while also handling business operations. I
                  ensured deadlines were met, kept quality high, and maintained
                  a balance between tasks, which helped keep clients happy and
                  projects on track.
                </p>
              </div>

              <div className="text">
                <h4>Problem Solving & Initiative</h4>
                <p>
                  Managed everything from client meetings to editing and
                  delivering photos while also handling business operations. I
                  ensured deadlines were met, kept quality high, and maintained
                  a balance between tasks, which helped keep clients happy and
                  projects on track.
                </p>
              </div>

              <div className="text">
                <h4>Adaptability & Flexibility</h4>
                <p>
                  I’ve transitioned between roles, from photographer and
                  business owner to food service and hotel guest experience. In
                  each position, I adjusted to the unique demands and was able
                  to perform well in fast-paced or challenging environments,
                  making sure everything ran smoothly.
                </p>
              </div>

              <div className="text">
                <h4>Attention to Detail</h4>
                <p>
                  Whether I was editing photos in Adobe Lightroom and Photoshop
                  or managing cash transactions, I always focused on precision.
                  This level of detail reduced errors, improved trust, and
                  ensured consistent quality, leading to repeat clients and
                  positive reviews.
                </p>
              </div>

              <div className="text">
                <h4>Customer Service Excellence</h4>
                <p>
                  In every role, I prioritized building strong relationships
                  with clients and customers. From hospitality to photography, I
                  made sure people felt valued, which led to loyal clients,
                  repeat business, and even requests for my personal assistance.
                  The 16 5-star reviews and a WeddingWire Brides Choice Award in
                  2012 reflect my commitment to delivering great service.
                </p>
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
                <h5 className="sub-title">
                  The Complete 2024 Web Development Bootcamp
                </h5>
                <h5 className="last-child">Udemy</h5>
              </li>
              <li>
                <h6> 09.2023 - 01.2024</h6>
                <h5 className="sub-title">UX Design Certificate</h5>
                <h5>Google</h5>
                <a href="/coursera.pdf" download>
                  <img src="download.png" alt="" />
                </a>
              </li>
              <li>
                <h6>05.2023 - 06.2023</h6>
                <h5 className="sub-title">
                  Intensive 200 hour Javascript/React course
                </h5>
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
              <ul
                className={`skills-list ${
                  showMoreSoftSkills ? "show-all" : ""
                }`}
              >
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
                className={`show-more-btn soft-skills-btn ${
                  showMoreSoftSkills ? "hidden" : ""
                }`}
              >
                {" "}
                <img
                  src={showMoreSoftSkills ? "up.png" : "down.png"}
                  alt={showMoreSoftSkills ? "Show less" : "Show more"}
                />
              </button>
            </div>

            <div className="first-column" ref={designSkillsRef}>
              <h5>Design and Development</h5>
              <ul
                className={`skills-list ${
                  showMoreDesignSkills ? "show-all" : ""
                }`}
              >
                <li className="skill">CSS</li>
                <li className="skill">HTML</li>
                <li className="skill">JavaScript</li>
                <li className="skill">React</li>
                <li className="skill">Wireframes</li>
                <li className="skill">Prototyping</li>
                <li className="skill">Mockups</li>
                <li className="skill">Usability testing</li>
                <li className="skill">User research</li>
                <li className="skill">Figma</li>
                <li className="skill">Visual Studio Code</li>
                <li className="skill">Slack</li>
                <li className="skill">Adobe Photoshop</li>
                <li className="skill">Creative Cloud</li>
                <li className="skill">Canva</li>
                <li className="skill">ChatGPT</li>
                <li className="skill">Leonardo.Ai</li>
              </ul>
              <button
                onClick={toggleShowMore1}
                className={`show-more-btn design-skills-btn ${
                  showMoreDesignSkills ? "hidden" : ""
                }`}
              >
                <img
                  src={showMoreDesignSkills ? "up.png" : "down.png"}
                  alt={showMoreDesignSkills ? "Show less" : "Show more"}
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
