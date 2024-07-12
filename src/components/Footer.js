import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <h2>Let's collaborate</h2>
      <div className="contacts">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:your-email@example.com">E-mail</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
