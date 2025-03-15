import React from 'react';
import './pricing.css';
import emailjs from 'emailjs-com';

function Pricing() {
  const sendNotification = () => {
    // Define template parameters - adjust these to match your EmailJS template configuration
    const templateParams = {
      to_email: 'mubassirnasar@gmail.com', // The recipient email
      subject: 'New Subscription Notification',
      message: 'A user has clicked subscribe on the portfolio website.',
    };

    // Use your EmailJS credentials: service ID, template ID, and public key (user ID)
    emailjs.send('service_9u95z89', 'template_5rztvda', templateParams, 'gKtdc4MMqav7IdUC_')
      .then((result) => {
        alert('Notification sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending notification:', error);
        alert('Failed to send notification.');
      });
  };

  const pricingOptions = [
    {
      category: 'MERN Website Price Packages',
      options: [
        { title: 'Free', price: '$0', features: ['Basic Support', 'Access to Free Resources'], size: 'small' },
        { title: 'Basic', price: '$99', features: ['Responsive Design', 'SEO Optimization', 'Backend Integration'], size: 'small' },
        { title: 'Pro', price: '$500', features: ['Responsive Design', 'SEO Optimization', 'Backend Integration', '1 Year Support'], size: 'big' },
        { title: 'Exclusive', price: '$1000', features: ['All Pro Features', 'Priority Support', 'Custom Integrations'], isNew: true, size: 'small' },
      ],
    },
    {
      category: 'Mobile Application Price Packages',
      options: [
        { title: 'Free', price: '$0', features: ['Basic Support', 'Access to Free Resources'], size: 'small' },
        { title: 'Basic', price: '$199', features: ['Cross-Platform', 'Push Notifications', 'In-App Purchases'], size: 'small' },
        { title: 'Pro', price: '$700', features: ['Cross-Platform', 'Push Notifications', 'In-App Purchases', '1 Year Support'], size: 'big' },
        { title: 'Exclusive', price: '$1200', features: ['All Pro Features', 'Priority Support', 'Custom Integrations'], isNew: true, size: 'small' },
      ],
    },
    {
      category: 'UI/UX Designing Price Packages',
      options: [
        { title: 'Free', price: '$0', features: ['Basic Support', 'Access to Free Resources'], size: 'small' },
        { title: 'Basic', price: '$150', features: ['User Research', 'Wireframing', 'Prototyping'], size: 'small' },
        { title: 'Pro', price: '$300', features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'], size: 'big' },
        { title: 'Exclusive', price: '$600', features: ['All Pro Features', 'Priority Support', 'Custom Designs'], isNew: true, size: 'small' },
      ],
    },
    {
      category: 'Digital Marketing Price Packages',
      options: [
        { title: 'Free', price: '$0', features: ['Basic Support', 'Access to Free Resources'], size: 'small' },
        { title: 'Basic', price: '$200', features: ['SEO', 'Content Marketing', 'Social Media Management'], size: 'small' },
        { title: 'Pro', price: '$400', features: ['SEO', 'Content Marketing', 'Social Media Management', 'Email Campaigns'], size: 'big' },
        { title: 'Exclusive', price: '$800', features: ['All Pro Features', 'Priority Support', 'Custom Campaigns'], isNew: true, size: 'small' },
      ],
    },
    {
      category: 'DevOps Services Price Packages',
      options: [
        { title: 'Free', price: '$0', features: ['Basic Support', 'Access to Free Resources'], size: 'small' },
        { title: 'Basic', price: '$300', features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging'], size: 'small' },
        { title: 'Pro', price: '$600', features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', '24/7 Support'], size: 'big' },
        { title: 'Exclusive', price: '$1200', features: ['All Pro Features', 'Priority Support', 'Custom Solutions'], isNew: true, size: 'small' },
      ],
    },
  ];

  return (
    <div className="pricing-container">
      <h1 className="pricing-heading">
        <span className="red-text">P</span>acks Pricing
      </h1>
      {pricingOptions.map((category, catIndex) => (
        <div key={catIndex} className="category-section">
          <h2 className="category-heading">{category.category}</h2>
          <div className="pricing-grid">
            {category.options.map((option, index) => (
              <div key={index} className={`pricing-card ${option.size} ${option.isNew ? 'highlight' : ''}`}>
                {option.isNew && <div className="new-label">New</div>}
                <h3>{option.title}</h3>
                <p className="price">{option.price}</p>
                <ul>
                  {option.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button onClick={sendNotification} className="pricing-button">Subscribe</button>
              </div>
            ))}
          </div>
          <hr className="section-divider" />
        </div>
      ))}
    </div>
  );
}

export default Pricing;