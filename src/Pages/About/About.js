import React from 'react';
import './About.css';
import ResumeDownload from '../../ResumeDownload';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-box">
        <h1>Who am I?</h1>
        <h2>A Web Designer/ Developer/ DevOps Engineer</h2>
        <p className='aboutexpertise'>
          I am a full-stack developer with extensive experience in managing websites and completing numerous app development projects. Additionally, I am proficient in DevOps methodologies, having successfully integrated them into many of my projects.
        </p>
        <ResumeDownload />
      </div>
      <div className="about-box">
        <h1>Personal Info</h1>
        <div>
          <p>Birthdate: 11/06/2002</p>
          <p>Phone: +94 705373833</p>
          <p>Email: mubassirnasar@gmail.com</p>
          <p>Address: No 85</p>
          <p>Education: Bachelor of Computer Science, University of Kingston</p>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=100086372373741" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://mail.google.com/mail" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-google"></i>
          </a>
          <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="about-box">
        <h1>My Projects</h1>
        <p>
          I have worked on various projects, including web applications, mobile apps, and DevOps pipelines. My portfolio showcases a range of projects that demonstrate my skills and expertise in different domains.
        </p>

        <Link to="portfolio" smooth={true} duration={500}>
          <button className="cv-button">View Portfolio</button>
        </Link>

      </div>
      <div className="about-box">
        <h1>Hobbies & Interests</h1>
        <p>
          Outside of work, I enjoy hiking, photography, and exploring new technologies. These activities help me stay creative and inspired in my professional endeavors.
        </p>
      </div>
    </div>
  );
};

export default About;
