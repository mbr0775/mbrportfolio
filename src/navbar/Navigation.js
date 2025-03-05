import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../index.css';
import '@fontsource/roboto';
import '@fontsource/montserrat';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

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
        <li className="nav-item">
          <Link to="login" smooth={true} duration={500}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
