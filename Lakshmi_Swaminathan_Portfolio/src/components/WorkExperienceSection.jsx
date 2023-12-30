import React from 'react';
import styled from 'styled-components';

const WorkExperienceContainer = styled.div`
height: 100vh;
  overflow-y: scroll;
  background-color:  rgba(77, 76, 76, 0.87);
  color: #fff;
  padding: 120px 40px 40px;
  width: 100vw; /* Take up the entire viewport width */
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
