import React from "react";
import "./expertise.css"; // Importing the CSS file

const Expertise = () => {
  return (
    <div className="expertise-section container">
      <h2 className="expertise-heading">
        <span className="red-text">My</span> Expertise
      </h2>

      <div className="expertise-container">
        <div className="expertise-item">
          <h3>2023 - Present</h3>
          <h4 className="position">MERN Full Stack Developer</h4>
          <p>Building dynamic web applications using MongoDB, Express.js, React.js, and Node.js.</p>
        </div>

        <div className="expertise-item">
          <h3>2023 - Present</h3>
          <h4 className="position">Mobile Application Developer</h4>
          <p>Developing cross-platform mobile apps with React Native and Kotlin.</p>
        </div>

        <div className="expertise-item">
          <h3>2023 - Present</h3>
          <h4 className="position">DevOps Engineer</h4>
          <p>Automating deployments, CI/CD pipelines, and cloud infrastructure management.</p>
        </div>

        <div className="expertise-item">
          <h3>2023 - Present</h3>
          <h4 className="position">Digital Marketer</h4>
          <p>Executing SEO, social media marketing, and content strategies to drive engagement.</p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
