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

const SkillsContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  background-color: #f9f9f9;
  color: #333;
  // padding: 40px 40px 40px; /* Adjusted top padding */
  padding-top:120px;
  width: 100vw; /* Take up the entire viewport width */
  // display: flex;
  // flex-direction: column;
  // align-items: center; /* Center content horizontally */
  // justify-content: center; /* Center content vertically */
  transition: transform 0.3s ease;

  &:hover {
    animation: ${zoomIn} 0.3s ease-in-out;
    transform: scale(1.05);
  }
`;






const SkillsSection = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsHeading>Skills</SkillsHeading>
      <SkillsList>
        <SkillCategory>
          <CategoryIcon src={`${process.env.PUBLIC_URL}/images/Laptop.png`} alt="Programming Languages Icon" />
          <CategoryInfo>
            <CategoryTitle>Programming Languages</CategoryTitle>
            <CategorySkills>Python, Javascript, Apex, Java, C++, C</CategorySkills>
          </CategoryInfo>
        </SkillCategory>

        <SkillCategory>
          <CategoryIcon src={`${process.env.PUBLIC_URL}/images/Web_Tech.jpg`} alt="Web Technologies Icon" />
          <CategoryInfo>
            <CategoryTitle>Web Technologies</CategoryTitle>
            <CategorySkills>ReactJs, NodeJs, ExpressJs, LWC, Aura, Cypress, Mocha.js, Chai.js</CategorySkills>
          </CategoryInfo>
        </SkillCategory>

        <SkillCategory>
          <CategoryIcon src={`${process.env.PUBLIC_URL}/images/Database.png`} alt="Database Technologies Icon" />
          <CategoryInfo>
            <CategoryTitle>Database Technologies</CategoryTitle>
            <CategorySkills>MongoDB, Mongoose ODM</CategorySkills>
          </CategoryInfo>
        </SkillCategory>

        <SkillCategory>
          <CategoryIcon src={`${process.env.PUBLIC_URL}/images/Software.png`}  alt="Software Icon" />
          <CategoryInfo>
            <CategoryTitle>Software</CategoryTitle>
            <CategorySkills>Visual Studio Code, Github, Jenkins</CategorySkills>
          </CategoryInfo>
        </SkillCategory>

      </SkillsList>
    </SkillsContainer>
  );
};

const SkillsHeading = styled.h2`
  margin-bottom: 20px;
  align-self: flex-start;
  padding-left: 100px;
  color: rgba(59, 160, 243, 0.87);
  padding-bottom:100px;
`;


const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 2px solid rgba(59, 160, 243, 0.87);
  border-radius: 10px;
  padding: 100px;
  margin-top: 20px;
  width: 50vw;
  margin: 0 auto; /* Center the SkillsList */
`;


const SkillCategory = styled.div`
  width: 48%; /* Two categories in a row with a small gap */
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const CategoryIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const CategoryInfo = styled.div``;

const CategoryTitle = styled.h3`
  margin-bottom: 5px;
  color: rgba(59, 160, 243, 0.87);
`;

const CategorySkills = styled.p`
  margin: 0;
`;

export default SkillsSection;
