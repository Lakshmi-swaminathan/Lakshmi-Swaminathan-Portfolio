import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  margin: 20px 0;

`;

const AboutContent = styled.div`
  max-width: 1000px;
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
          "We're here to put a dent in the Universe!" - Steve Jobs
        </AboutParagraph>
        <AboutParagraph>
          Hi, I'm Lakshmi Swaminathan, a Master's in Computer Science student at Purdue University, Fort Wayne, and a passionate coder with a solid foundation in the Computer Science domain. As a 4-star rated problem solver on HackerRank, I specialize in data structures and algorithms.
        </AboutParagraph>
        <AboutParagraph>
          I bring around 3 years of experience as a Software Development Engineer at Verizon. As part of my coursework and personal/course-related projects, I've honed my skills in the MERN stack, automation, AI/ML, and high-performance computing. I thrive in problem-solving and have led multiple projects across software development, machine learning, deep learning, natural language processing, and high-performance computing.
        </AboutParagraph>
        <AboutParagraph>
          Currently, I am a Research Assistant at Purdue University, where I am working on an exciting project focused on the "Effectiveness of Brand Promotion by AI Influencers." My role involves deep data analysis, blending technical prowess with creative thinking to produce actionable insights.
        </AboutParagraph>
        <AboutParagraph>
          One of my proudest accomplishments was at Verizon, where I developed a solution to streamline Upsell sales transactions. This innovative approach reduced process time by 34% and boosted upsell conversions by 16%, earning me the Spotlight Award for Quality/Process Improvement. In addition, I’ve been honored with multiple Spotlight Awards for Accountability and Personal Commitment, as well as over 20 Verizon Simple Thanks Awards for my collaborative work and commitment to excellence.
        </AboutParagraph>
        <AboutParagraph>
          I am a team player who believes in supporting and learning from my peers. I thrive in team-oriented environments where collaboration and continuous learning drive success.  I'm committed to delivering seamless user experiences and take pride in contributing to high-impact projects. Explore my portfolio and feel free to reach out—let's create something extraordinary together!
        </AboutParagraph>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
