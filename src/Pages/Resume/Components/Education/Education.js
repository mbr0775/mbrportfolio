import React from "react";
import "./education.css"; // Add a CSS file for better styling

const Education = () => {
  return (
    <div className="education-section">
      <h2 className="education-heading">
        <span className="red-text">My</span> Education
      </h2>

      <div className="education-container">
        <div className="education-item">
          <h3>2019 - 2021</h3>
          <h4 className="position">High School - Advanced Level</h4>
          <p>Completed my high school studies with a strong foundation in mathematics and computer science.</p>
        </div>

        <div className="education-item">
          <h3>2021 - 2022</h3>
          <h4 className="position">Diploma in Information Technology</h4>
          <p>Gained fundamental knowledge in IT, focusing on software development and networking concepts.</p>
        </div>

        <div className="education-item">
          <h3>2022 - 2024</h3>
          <h4 className="position">Higher National Diploma in Software Engineering</h4>
          <p>Specialized in software engineering, mastering full-stack development, databases, and system architecture.</p>
        </div>

        <div className="education-item">
          <h3>Since 2024</h3>
          <h4 className="position">B.Eng in Software Engineering</h4>
          <p>Pursuing advanced studies in software engineering with a focus on cloud computing, DevOps, and AI development.</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
