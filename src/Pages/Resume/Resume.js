import React from 'react';

import Expertise from './Components/Expertise/Expertise';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Languages from './Components/Language/Languages';

const Resume = () => {
  return (
    <div>
      <div>
          <Expertise />
          <Education />
          <Skills />
          <Languages />      
      </div>
    </div>
  );
};

export default Resume;