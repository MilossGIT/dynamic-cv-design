import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Skills from './Skills';
import Languages from './Languages';

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <WorkExperience />
      <Education />
      <Skills />
      <Languages />
    </div>
  );
}

export default App;
