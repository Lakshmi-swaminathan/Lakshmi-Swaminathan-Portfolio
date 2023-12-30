import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  background-color:  rgba(77, 76, 76, 0.87);
  color: #fff;
  padding: 120px 40px 40px;
  width: 100vw; /* Take up the entire viewport width */
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
