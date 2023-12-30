import React from 'react';
import styled from 'styled-components';

const WorkExperienceContainer = styled.div`
height: 100vh;
  overflow-y: scroll;
  background-color: #ecf0f1;
  color: #333;
  padding: 120px 40px 40px;
`;

const WorkExperienceSection = () => {
  return (
    <WorkExperienceContainer id="work-experience">
      <h2>Work Experience</h2>
      {/* Add your work experience content here... */}
    </WorkExperienceContainer>
  );
};

export default WorkExperienceSection;
