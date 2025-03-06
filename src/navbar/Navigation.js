import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../index.css';
import '@fontsource/roboto';
import '@fontsource/montserrat';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Left Nav Items */}
      <ul className={`nav-items left ${menuOpen ? 'show' : ''}`}>
        <li className="nav-item">
          <Link to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="resume" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            Resume
          </Link>
        </li>
      </ul>

      {/* Center Logo or Text */}
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

      {/* Right Nav Items */}
      <ul className={`nav-items right ${menuOpen ? 'show' : ''}`}>
        <li className="nav-item">
          <Link to="portfolio" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="blog" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="login" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
