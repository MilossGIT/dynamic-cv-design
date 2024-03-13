import React from 'react';
import './Skills.css';

function Skills() {
  const handleZoomIn = (event) => {
    event.target.style.transform = 'scale(1.1)';
  };

  const handleZoomOut = (event) => {
    event.target.style.transform = 'scale(1)';
  };

  return (
    <section className="skills-section">
      <h2>Digital Skills</h2>
      <div className="skills-list">
        <div className="skill" onMouseEnter={handleZoomIn} onMouseLeave={handleZoomOut}>
          <h3>Languages</h3>
          <p>HTML, CSS, JavaScript, TypeScript</p>
        </div>
        <div className="skill" onMouseEnter={handleZoomIn} onMouseLeave={handleZoomOut}>
          <h3>Frontend Framework</h3>
          <p>React</p>
        </div>
        <div className="skill" onMouseEnter={handleZoomIn} onMouseLeave={handleZoomOut}>
          <h3>Testing Framework</h3>
          <p>Cypress</p>
        </div>
        <div className="skill" onMouseEnter={handleZoomIn} onMouseLeave={handleZoomOut}>
          <h3>Backend Technologies</h3>
          <p>Node.js, PHP</p>
        </div>
        <div className="skill" onMouseEnter={handleZoomIn} onMouseLeave={handleZoomOut}>
          <h3>Frameworks</h3>
          <p>Bootstrap, WordPress</p>
        </div>
        <div className="skill" onMouseEnter={handleZoomIn} onMouseLeave={handleZoomOut}>
          <h3>Database</h3>
          <p>MySQL, MongoDB</p>
        </div>
        <div className="skill" onMouseEnter={handleZoomIn} onMouseLeave={handleZoomOut}>
          <h3>Version Control</h3>
          <p>GIT</p>
        </div>
        <div className="skill" onMouseEnter={handleZoomIn} onMouseLeave={handleZoomOut}>
          <h3>Styling Preprocessors</h3>
          <p>SASS / SCSS</p>
        </div>
        <div className="skill" onMouseEnter={handleZoomIn} onMouseLeave={handleZoomOut}>
          <h3>Markup Languages</h3>
          <p>XML, YAML/JSON</p>
        </div>
        <div className="skill" onMouseEnter={handleZoomIn} onMouseLeave={handleZoomOut}>
          <h3>Web Development</h3>
          <p>Object-Oriented Programming</p>
        </div>
        <div className="skill" onMouseEnter={handleZoomIn} onMouseLeave={handleZoomOut}>
          <h3>Database Management</h3>
          <p>SQL, Relational Databases</p>
        </div>
        <div className="skill" onMouseEnter={handleZoomIn} onMouseLeave={handleZoomOut}>
          <h3>Content Management System</h3>
          <p>CMS (WordPress)</p>
        </div>
        <div className="skill" onMouseEnter={handleZoomIn} onMouseLeave={handleZoomOut}>
          <h3>Automation and Scripting</h3>
          <p>Bash</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
