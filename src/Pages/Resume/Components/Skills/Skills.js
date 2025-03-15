import React from "react";
import "./Skills.css";

const skillsData = [
  {
    category: "MERN Full Stack Development",
    skills: [
      { name: "React.js", percentage: 90 },
      { name: "Node.js", percentage: 85 },
      { name: "Express.js", percentage: 80 },
      { name: "MongoDB", percentage: 88 },
      { name: "Redux", percentage: 75 },
      { name: "Next.js", percentage: 70 },
      { name: "GraphQL", percentage: 65 },
      { name: "TypeScript", percentage: 78 },
    ],
  },
  {
    category: "Mobile Application Development",
    skills: [
      { name: "React Native", percentage: 85 },
      { name: "Kotlin", percentage: 80 },
      { name: "Swift", percentage: 75 },
      { name: "Flutter", percentage: 70 },
      { name: "Firebase", percentage: 88 },
      { name: "UI/UX Design", percentage: 90 },
      { name: "API Integration", percentage: 82 },
    ],
  },
  {
    category: "DevOps Engineering",
    skills: [
      { name: "Docker", percentage: 80 },
      { name: "Kubernetes", percentage: 75 },
      { name: "CI/CD", percentage: 85 },
      { name: "Terraform", percentage: 70 },
      { name: "Prometheus & Grafana", percentage: 78 },
      { name: "AWS", percentage: 85 },
      { name: "Linux", percentage: 90 },
    ],
  },
  {
    category: "Graphic and Digital Marketing",
    skills: [
      { name: "Photoshop", percentage: 85 },
      { name: "Illustrator", percentage: 80 },
      { name: "Canva", percentage: 90 },
      { name: "UI/UX Design", percentage: 88 },
      { name: "SEO", percentage: 75 },
      { name: "Social Media Marketing", percentage: 80 },
      { name: "Google Ads", percentage: 70 },
      { name: "Branding", percentage: 78 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h1 className="skills-heading">
        <span className="red-text">My</span> Skill
      </h1>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skills-category">
            <h2>{category.category}</h2>
            <div className="skills-grid">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="circle">
                    <svg>
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        style={{
                          strokeDashoffset: 251 - (251 * skill.percentage) / 100,
                        }}
                      ></circle>
                    </svg>
                    <span className="percentage">{skill.percentage}%</span>
                  </div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
