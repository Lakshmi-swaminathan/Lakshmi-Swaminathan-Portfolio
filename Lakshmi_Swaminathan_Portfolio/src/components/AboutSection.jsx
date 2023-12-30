import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  background-color: #f9f9f9;
  color: #333;
  padding: 120px 40px 40px;
  width: 100vw; /* Take up the entire viewport width */
`;

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <h2>About Me</h2>
      <p>Your about me content goes here...</p>
    </AboutContainer>
  );
};

export default AboutSection;
