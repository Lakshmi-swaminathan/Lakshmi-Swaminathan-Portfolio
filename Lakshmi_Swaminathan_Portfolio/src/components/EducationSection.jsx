import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  background-color: #ecf0f1;
  color: #333;
  padding: 120px 40px 40px;
`;

const EducationSection = () => {
  return (
    <EducationContainer id="education">
      <h2>Education</h2>
      {/* Add your education content here... */}
    </EducationContainer>
  );
};

export default EducationSection;
