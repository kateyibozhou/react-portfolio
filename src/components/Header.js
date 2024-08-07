import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/" className="logo-link">
        <div className="logo">Zhou Yibo</div>
      </Link>
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
                  <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                  <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
                  <li><a href="#about" onClick={toggleMenu}>About</a></li>
                  <li><a href="/ZhouYiboResume.pdf" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Resume</a></li>
                  <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
              </nav>
            </div>
          )}
        </>
      ) : (
        <nav className="desktop-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><a href="#about">About</a></li>
            <li><a href="/ZhouYiboResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;