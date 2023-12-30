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
      <p>"We're here to put a dent in the Universe!!" - Steve Jobs<br/> I'm a passionate coder. Tech enthusiast. A person who loves to learn things at a deeper level. My long term goal is to make people's lives easier leveraging technology.<br/> I love solving problems, building solutions in the most optimal way possible. </p>
    </AboutContainer>
  );
};

export default AboutSection;
