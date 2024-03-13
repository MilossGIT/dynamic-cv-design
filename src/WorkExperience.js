import React from 'react';
import './WorkExperience.css';

function WorkExperience() {
  return (
    <section className="work-experience-section">
      <h2>Work Experience</h2>

      <div className="job">
        <h3>Software Integration Engineer - Sportradar</h3>
        <p>April 2022 – Present, Ljubljana, Slovenia</p>
        <ul>
          <li>Frontend-focused engineer specializing in the development of custom widget products.</li>
          <li>Utilizing JavaScript, TypeScript, HTML, CSS, and Sass/SCSS.</li>
          <li>Conducting end-to-end integration, including requirements analysis and technical communication.</li>
          <li>Using APIs and GIT efficiently for seamless integration processes.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Software Engineer - CCBill</h3>
        <p>Sept 2017 – March 2022, Belgrade, Serbia</p>
        <ul>
          <li>Frontend developer specializing in custom payment forms.</li>
          <li>Resolved frontend issues, optimized web projects, and enhanced e-commerce.</li>
          <li>Integrated Subscription Management System and Data Link Extract System.</li>
          <li>Collaborated on e-commerce improvements.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Frontend Developer - BG Wireless</h3>
        <p>June 2011 – June 2017, Belgrade, Serbia</p>
        <ul>
          <li>Improved wired and wireless network infrastructure.</li>
          <li>Designed and maintained websites, implemented responsive interfaces, and enhanced user experiences.</li>
          <li>Collaborated cross-functionally for seamless web functionality.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Junior Frontend Developer - Performance Technologies</h3>
        <p>Nov 2015 – Dec 2016, Belgrade, Serbia</p>
        <ul>
          <li>Collaborated in cross-functional teams, crafting visually appealing and intuitive user interfaces.</li>
          <li>Implemented cutting-edge responsive designs, ensuring a user experience across diverse devices and browsers.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Software Support Engineer L2 - NCR</h3>
        <p>Feb 2014 – Nov 2015, Belgrade, Serbia</p>
        <ul>
          <li>Supported retail software systems (POS, ESB, SCOM).</li>
          <li>Proficient in POS systems, middleware management, server optimization, and virtualization.</li>
        </ul>
      </div>

    </section>
  );
}

export default WorkExperience;
