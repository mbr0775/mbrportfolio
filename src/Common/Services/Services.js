import React from 'react';
import './Services.css';

function Services() {
  const services = [
    { title: 'Web Development', description: 'Building responsive and modern websites that are optimized for performance and user experience. Utilizing the latest technologies and best practices to ensure your website stands out. From front-end development to back-end integration, we provide comprehensive web development services tailored to your business needs.', icon: 'fas fa-code' },
    { title: 'Mobile Development', description: 'Creating mobile applications for Android and iOS that provide a seamless user experience. Leveraging native and cross-platform technologies to deliver high-quality apps. Our mobile development services ensure your app is fast, reliable, and user-friendly, helping you reach a wider audience on multiple devices.', icon: 'fas fa-mobile-alt' },
    { title: 'UI/UX Design', description: 'Designing user-friendly interfaces and experiences that are both visually appealing and functional. Focusing on user-centered design principles to create intuitive and engaging designs. Our UI/UX design services aim to enhance user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction with your product.', icon: 'fas fa-paint-brush' },
    { title: 'SEO Optimization', description: 'Improving website visibility on search engines through on-page and off-page optimization techniques. Helping your website rank higher and attract more organic traffic. Our SEO services include keyword research, content optimization, link building, and performance tracking to ensure your website achieves its full potential.', icon: 'fas fa-search' },
    { title: 'Digital Marketing', description: 'Promoting brands through digital channels such as social media, email marketing, and online advertising. Crafting effective marketing strategies to reach your target audience. Our digital marketing services help you build a strong online presence, engage with your audience, and drive conversions through data-driven campaigns.', icon: 'fas fa-bullhorn' },
    { title: 'Content Creation', description: 'Creating engaging content for various platforms, including blogs, social media, and websites. Ensuring your content is informative, relevant, and tailored to your audience. Our content creation services include writing, editing, and multimedia production to help you communicate your message effectively and build a loyal audience.', icon: 'fas fa-pencil-alt' },
    { title: 'Graphic Design', description: 'Designing logos, banners, and other graphics that effectively communicate your brand message. Combining creativity and technical skills to produce visually stunning designs. Our graphic design services help you create a strong visual identity that resonates with your audience and sets you apart from the competition.', icon: 'fas fa-drafting-compass' },
    { title: 'DevOps', description: 'Automating and managing infrastructure to improve efficiency and reliability. Implementing continuous integration and continuous deployment (CI/CD) pipelines to streamline development processes. Our DevOps services help you achieve faster delivery, better collaboration, and more robust systems through automation and best practices.', icon: 'fas fa-cogs' },
    { title: 'Consulting', description: 'Providing expert advice and solutions to help you achieve your business goals. Offering insights and recommendations based on industry best practices and years of experience. Our consulting services cover a wide range of areas, including strategy, technology, and operations, to help you make informed decisions and drive growth.', icon: 'fas fa-lightbulb' },
  ];

  return (
    <div className="services-container">
      <h1 className="services-heading">
        <span className="red-text">My</span> Services
      </h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-container">
              <i className={service.icon}></i>
            </div>
            <h2 className='services-head'>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;