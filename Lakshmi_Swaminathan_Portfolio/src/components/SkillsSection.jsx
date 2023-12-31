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
  padding: 120px 40px 40px;
  width: 100vw; /* Take up the entire viewport width */
  transition: transform 0.3s ease;

  &:hover {
    animation: ${zoomIn} 0.3s ease-in-out;
    transform: scale(1.05);
  }
`;


const SkillsSection = () => {
  return (
    <SkillsContainer id="skills">
      <h2>Skills</h2>
      <SkillsList>
        <SkillCategory>
          <CategoryIcon src="../../public/images/Laptop.png" alt="Programming Languages Icon" />
          <CategoryInfo>
            <CategoryTitle>Programming Languages</CategoryTitle>
            <CategorySkills>Python, Javascript, Apex, Java, C++, C</CategorySkills>
          </CategoryInfo>
        </SkillCategory>

        <SkillCategory>
          <CategoryIcon src="../../public/images/Web_Tech.jpg" alt="Web Technologies Icon" />
          <CategoryInfo>
            <CategoryTitle>Web Technologies</CategoryTitle>
            <CategorySkills>ReactJs, NodeJs, ExpressJs, LWC, Aura</CategorySkills>
          </CategoryInfo>
        </SkillCategory>

        <SkillCategory>
          <CategoryIcon src="../../public/images/Database.png" alt="Database Technologies Icon" />
          <CategoryInfo>
            <CategoryTitle>Database Technologies</CategoryTitle>
            <CategorySkills>MongoDB, Mongoose ODM</CategorySkills>
          </CategoryInfo>
        </SkillCategory>

        <SkillCategory>
          <CategoryIcon src="../../public/images/Software.png" alt="Software Icon" />
          <CategoryInfo>
            <CategoryTitle>Software</CategoryTitle>
            <CategorySkills>Visual Studio Code, Github, Jenkins</CategorySkills>
          </CategoryInfo>
        </SkillCategory>

        {/* Add more SkillCategory components for other categories */}
      </SkillsList>
    </SkillsContainer>
  );
};

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
`;

const CategorySkills = styled.p`
  margin: 0;
`;

export default SkillsSection;
