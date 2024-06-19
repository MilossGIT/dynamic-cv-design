import React from 'react';
import './WorkExperience.css';

function WorkExperience() {
  return (
<section className="work-experience-section">
  <h2>Work Experience</h2>

  <div className="job">
    <h3>Software Integration Engineer - Sportradar</h3>
    <p>April 4th 2022 – Present, Ljubljana</p>
    <ul>
      <li>Frontend-focused engineer specializing in the development of custom widget products.</li>
      <li>Utilizing JavaScript, TypeScript, HTML, CSS, and Sass/SCSS.</li>
      <li>Conducting end-to-end integration.</li>
      <li>Requirements analysis and technical communication.</li>
      <li>Using APIs and GIT efficiently for seamless integration processes.</li>
      <li>Working in an Agile Environment.</li>
    </ul>
  </div>

  <div className="job">
    <h3>MSE Tier 2 - CCBill</h3>
    <p>Sept 2017 – April 2022, Belgrade</p>
    <ul>
      <li>Frontend development of secure and user-friendly payment forms.</li>
      <li>Successfully deployed the payment form to the production environment.</li>
      <li>Identifying issues and responding to any payment processing errors promptly.</li>
      <li>Reducing the incidence of payment errors through robust validation.</li>
      <li>Conducted detailed discussions with the client to understand their business needs.</li>
    </ul>
  </div>

  <div className="job">
    <h3>Web Developer - BG Wireless</h3>
    <p>June 2016 – Sept 2017, Belgrade</p>
    <ul>
      <li>Maintaining website and content management.</li>
      <li>Implementation of responsive design and improving user experience.</li>
      <li>Created visually appealing and cohesive designs.</li>
      <li>Managing network wireless infrastructure.</li>
    </ul>
  </div>

  <div className="job">
    <h3>Junior Frontend Developer - Queens Trade d.o.o.</h3>
    <p>June 2015 – Dec 2016, Belgrade</p>
    <ul>
      <li>Coded responsive and visually appealing banner layouts using HTML and CSS.</li>
      <li>Ensuring cross-browser compatibility.</li>
      <li>Increasing click-through rates for client advertising campaigns.</li>
      <li>Received positive client feedback for attention to detail.</li>
    </ul>
  </div>

  <div className="job">
    <h3>Software Support Engineer L2 - NCR</h3>
    <p>Oct 2014 – June 2015, Belgrade</p>
    <ul>
      <li>Second-level technical support for customers with complex technical issues and escalations.</li>
      <li>Supported retail software systems (POS, ESB, SCOM).</li>
      <li>Proficient in POS systems, server optimization, and virtualization.</li>
    </ul>
  </div>

</section>
  );
}

export default WorkExperience;
