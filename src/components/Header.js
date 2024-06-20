import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo-link">
        <div className="logo">Zhou Yibo</div>
      </a>
      <nav>
        <ul>
          <li><a href="/projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="/ZhouYiboResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;