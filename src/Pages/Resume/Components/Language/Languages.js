import React from 'react';
import './language.css';

function Languages() {
  const languages = [
    { name: 'Tamil', level: 99 },
    { name: 'English', level: 85 },
    { name: 'Arabic', level: 75 },
    { name: 'Malayalam', level: 80 },
    { name: 'Hindi', level: 70 }
  ];

  return (
    <div className="languages-section">
      <h2>Languages I Speak</h2>
      <div className="languages-grid">
        {languages.map((language, index) => (
          <div className="language-item" key={index}>
            <div className="language-circle">
              <div className="progress-circle" style={{ background: `conic-gradient(#ff6347 ${language.level}%, #ffffff ${language.level}%)` }}>
                <span className="progress-text">{language.level}%</span>
              </div>
            </div>
            <h4>{language.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Languages;
