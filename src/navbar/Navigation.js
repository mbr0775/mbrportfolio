import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './navigation.css';
import '@fontsource/roboto';
import '@fontsource/montserrat';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      {/* Hamburger Menu Icon */}
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      {/* Center Name Text (Visible before menu is clicked) */}
      {!isMobileMenuOpen && (
        <div className="mobile-header-text">
          <span className="font-roboto text-lg center-txt1">Mubassir Nasar</span>
          <span className="font-roboto text-sm center-txt">Developer | DevOps Engineer</span>
        </div>
      )}

      {/* Mobile Navigation Items */}
      <div className={`mobile-nav-items ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="home" smooth={true} duration={500} onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500} onClick={toggleMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="resume" smooth={true} duration={500} onClick={toggleMobileMenu}>
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link to="portfolio" smooth={true} duration={500} onClick={toggleMobileMenu}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="blog" smooth={true} duration={500} onClick={toggleMobileMenu}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" smooth={true} duration={500} onClick={toggleMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Navigation Items */}
      <div className="desktop-nav-items">
        <ul className="nav-items left">
          <li className="nav-item">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="resume" smooth={true} duration={500}>
              Resume
            </Link>
          </li>
        </ul>
        <div className="center-content">
          {scrolled ? (
            <>
              <span className="font-roboto text-lg center-txt1">Mubassir Nasar</span>
              <span className="font-roboto text-sm center-txt">Developer | DevOps Engineer</span>
            </>
          ) : (
            <img src={require('./mbr3.jpg')} alt="Mubassir Nasar" className="circle-image" />
          )}
        </div>
        <ul className="nav-items right">
          <li className="nav-item">
            <Link to="portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="blog" smooth={true} duration={500}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;