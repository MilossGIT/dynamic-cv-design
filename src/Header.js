import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className='header-container'>
      <div className='profile-img-container'>
        <img
          src='https://media.licdn.com/dms/image/C4E03AQHmB6NIVlS4aw/profile-displayphoto-shrink_800_800/0/1633972045021?e=1715817600&v=beta&t=F8dJGuUIKldt5jZP_UAxRruW65Dc_QZsVpelYFaEq5U'
          className='profile-img'
          alt='Profile'
        />
      </div>
      <div className='header-content'>
        <h1>Miloš Minić</h1>
        <p>Date of Birth: 22/01/1991</p>
        <p>Phone: (+386) 030368261</p>
        <p>Email: minicm034@gmail.com</p>
        <p>Location: Ljubljana, Slovenia</p>
        <div className='social-media-links'>
          <a
            href='https://www.linkedin.com/in/milos-minic-0302b96b'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
          <a
            href='https://github.com/MilossGIT'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
