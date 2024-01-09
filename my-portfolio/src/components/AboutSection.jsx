import React from 'react';
import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 40px;
  background-color: #f9f9f9;
  color: #333;
  width: 100vw;
  text-align: left;
  border: 2px double #3498db;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  margin: 20px 0; /* Center the component vertically */
  
  &:hover {
    animation: ${zoomIn} 0.3s ease-in-out;
    transform: scale(1.05);
  }
`;

const AboutContent = styled.div`
  max-width: 1000px; /* Adjust the width as needed */
  border: 1px solid #3498db;
  padding: 20px;
  border-radius: 8px;
`;

const AboutHeading = styled.h2`
  color: #3498db;
  margin-bottom: 20px;
`;

const AboutParagraph = styled.p`
  line-height: 1.6;
  margin-bottom: 20px;
`;

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutHeading>About Me</AboutHeading>
        <AboutParagraph>
          "We're here to put a dent in the Universe!!" - Steve Jobs
        </AboutParagraph>
        <AboutParagraph>
          Hi, I'm Lakshmi Swaminathan, a Full Stack Developer. With a passion for coding and technology, I consider myself a perpetual learner, always striving to delve into the intricacies of programming and beyond. My primary objective is to harness technology to simplify and enhance people's lives.
        </AboutParagraph>
        <AboutParagraph>
          I derive immense satisfaction from problem-solving and take pride in constructing efficient, optimal solutions. I have experience working in various technologies, including Web development, Machine learning, deep learning, and more.
        </AboutParagraph>
        <AboutParagraph>
          Currently pursuing a Master's in Computer Science at Purdue University, I am deeply engrossed in web development, well-versed in MERN stack.
        </AboutParagraph>
        <AboutParagraph>
          Outside the realm of coding, I am an advocate for continuous learning. With a keen eye for detail and a commitment to quality, I have been recognized with Spotlight Awards for Quality/Process improvement, Accountability, and Personal commitment at Verizon.
        </AboutParagraph>
        <AboutParagraph>
          Feel free to explore my portfolio and get in touch. Let's create something extraordinary!
        </AboutParagraph>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
