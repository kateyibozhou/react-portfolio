import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className="header">
      <a href="/" className="logo-link">
        <div className="logo">Zhou Yibo</div>
      </a>
      {isMobile ? (
        <>
          <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          {isMenuOpen && (
            <div className="mobile-menu-overlay">
              <nav className="mobile-nav">
                <ul>
                  <li><a href="/" onClick={toggleMenu}>Home</a></li>
                  <li><a href="/react-portfolio/#/projects" onClick={toggleMenu}>Projects</a></li>
                  <li><a href="/react-portfolio/#about" onClick={toggleMenu}>About</a></li>
                  <li><a href="/react-portfolio/#/ZhouYiboResume.pdf" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Resume</a></li>
                  <li><a href="/react-portfolio/#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
              </nav>
            </div>
          )}
        </>
      ) : (
        <nav className="desktop-nav">
          <ul>
            <li><a href="/react-portfolio/#/projects">Projects</a></li>
            <li><a href="/react-portfolio/#about">About</a></li>
            <li><a href="/react-portfolio/#/ZhouYiboResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
            <li><a href="/react-portfolio/#contact">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;