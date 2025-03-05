import React from 'react';
import './Hiring.css';
import emailjs from 'emailjs-com';

function Hiring() 

{

  const sendNotification = () => {
    // Define template parameters - adjust these to match your EmailJS template configuration
    const templateParams = {
      to_email: 'mubassirnasar@gmail.com', // The recipient email
      subject: 'New Client Hire Notification',
      message: 'A user has clicked Hireme on the portfolio website.',
    };

    // Use your EmailJS credentials: service ID, template ID, and public key (user ID)
    emailjs.send('service_9u95z89', 'template_5rztvda', templateParams, 'gKtdc4MMqav7IdUC_')
      .then((result) => {
        alert('Notification sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending notification:', error);
        alert('Failed to send notification.');
      })
  };

  return (
    <div className="hiring-section">
      <h2 className="hiring-text">I am Available For Freelance</h2>
      <p className="hiring-description">I am a passionate DevOps Engineer / Full Stack Developer ready to work on exciting projects!</p>
      <button onClick={sendNotification} className="hiring-button">Hire Me</button>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i> LinkedIn
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="mailto:your.email@example.com">
          <i className="fas fa-envelope"></i> Email
        </a>
      </div>
    </div>
  );
}

export default Hiring;