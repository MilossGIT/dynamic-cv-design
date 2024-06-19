import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className='header-container'>
      <div className='profile-img-container'>
        <img
          src='https://media.licdn.com/dms/image/D4D03AQFs5iYthlRcwQ/profile-displayphoto-shrink_400_400/0/1718219246681?e=1724284800&v=beta&t=_1jjiRWdv_oo4llCvW7f6JiWkcFI-ztUCU8Lr1TF6Mk'
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
