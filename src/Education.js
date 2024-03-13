import React from 'react';
import './Education.css';

function Education() {
  return (
    <section className="education-section">
      <h2>Education & Training</h2>

      <div className="education-item">
        <h3>JavaScript & React.js Course Certification - Cubes d.o.o.</h3>
        <p><a href="http://cubes.rs" target="_blank" rel="noopener noreferrer">http://cubes.rs</a></p>
      </div>

      <div className="education-item">
        <h3>Bachelor's Degree - The College of Hotel Management</h3>
        <p><a href="http://vhs.edu.rs" target="_blank" rel="noopener noreferrer">vhs.edu.rs</a></p>
      </div>

      <div className="education-item">
        <h3>High School Diploma - XV Beogradska Gimnazija</h3>
        <p><a href="https://gimnazijapatrijarhpavle.edu.rs" target="_blank" rel="noopener noreferrer">gimnazijapatrijarhpavle.edu.rs</a></p>
      </div>
    </section>
  );
}

export default Education;
