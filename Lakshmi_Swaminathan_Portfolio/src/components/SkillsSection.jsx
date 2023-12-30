import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
height: 100vh;
  overflow-y: scroll;
  background-color: #f9f9f9;
  color: #333;
  padding: 120px 40px 40px;
  width: 100vw; /* Take up the entire viewport width */
`;

const SkillsSection = () => {
  return (
    <SkillsContainer id="skills">
      <h2>Skills</h2>
      {/* Add your skills content here... */}
    </SkillsContainer>
  );
};

export default SkillsSection;
