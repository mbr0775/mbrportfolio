import React, { useState } from 'react';
import './Contact.css';
import { db, addDoc, collection } from './firebase'; // Import Firebase functions

function ContactForm() {
  const [name, setName] = useState('');    // State to manage name input
  const [email, setEmail] = useState('');  // State to manage email input
  const [subject, setSubject] = useState(''); // State to manage message input
  const [message, setMessage] = useState(''); // State to manage message input
  const [loading, setLoading] = useState(false); // State to show loading spinner

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent page reload on form submit
    setLoading(true);    // Show loading status

    try {
      // Add contact data to Firestore
      await addDoc(collection(db, 'contacts'), {
        name,
        email,
        subject,
        message,
        timestamp: new Date(),  
        // Store the timestamp of the message submission
        
        // Store the timestamp of the message submission
      });
      alert('Message Sent!');  // Success alert
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error sending message!');  // Error alert if something goes wrong
    }

    // Clear form inputs after submission
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setLoading(false); // Hide loading spinner
  };

  return (
    <div className="contact-container">
      <h1 className="contact-me-heading">Contact Me</h1>
      
      {/* Contact Form & Map (Top Section) */}
      <div className="contact-top">
        <div className="contact-form-container">
          <h2 className="contact-heading">Get in Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
            className='contact-input'
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update name state on input change
              required
            />
            <input
            className='contact-input'
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on input change
              required
            />
            <input
            className='contact-input'
              type="text"
              name="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)} // Update email state on input change
              required
            />
            <textarea
            className='contact-textarea'
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Update message state on input change
              required
            ></textarea>
            <button type="submit" disabled={loading} className="contact-button">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112484634!2d144.9630579153169!3d-37.81410797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9f0b1b1e0e!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1613962622834!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>

      {/* Bottom Content: Contact Information Boxes */}
      <div className="contact-details">
        <div className="contact-box">
          <i className="fas fa-phone-alt"></i>
          <h3>Phone</h3>
          <p>+123 456 789</p>
        </div>
        <div className="contact-box">
          <i className="fas fa-envelope"></i>
          <h3>Email</h3>
          <p>contact@example.com</p>
        </div>
        <div className="contact-box">
          <i className="fas fa-location-arrow"></i>
          <h3>Location</h3>
          <p>New York, USA</p>
        </div>
        <div className="contact-box">
          <i className="fab fa-linkedin"></i>
          <h3>LinkedIn</h3>
          <p>linkedin.com/in/username</p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
