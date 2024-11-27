import React from 'react';
import styled, { keyframes } from 'styled-components';

const SkillsContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  background-color: #f9f9f9;
  color: #333;
  padding-top: 120px;
  width: 100vw;
  transition: transform 0.3s ease;

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
            <CategorySkills>ReactJs, NodeJs, ExpressJs, LWC, Aura, Cypress, ChaiJs, MochaJs</CategorySkills>
          </CategoryInfo>
        </SkillCategory>

        <SkillCategory>
          <CategoryIcon src={`${process.env.PUBLIC_URL}/images/Database.png`} alt="Database Technologies Icon" />
          <CategoryInfo>
            <CategoryTitle>Database Technologies</CategoryTitle>
            <CategorySkills>MongoDB, Mongoose ODM, SOQL</CategorySkills>
          </CategoryInfo>
        </SkillCategory>

        <SkillCategory>
          <CategoryIcon src={`${process.env.PUBLIC_URL}/images/Software.png`} alt="Software Icon" />
          <CategoryInfo>
            <CategoryTitle>Software</CategoryTitle>
            <CategorySkills>Visual Studio Code, Github, Jenkins, Jira, Postman, Confluence</CategorySkills>
          </CategoryInfo>
        </SkillCategory>

        <SkillCategory>
          <CategoryIcon src={`${process.env.PUBLIC_URL}/images/Cloud.png`} alt="Cloud Services Icon" />
          <CategoryInfo>
            <CategoryTitle>Cloud Services</CategoryTitle>
            <CategorySkills>Google Cloud Platform (familiar)</CategorySkills>
          </CategoryInfo>
        </SkillCategory>

        <SkillCategory>
          <CategoryIcon src={`${process.env.PUBLIC_URL}/images/Framework.png`} alt="Framework Technologies Icon" />
          <CategoryInfo>
            <CategoryTitle>Technologies/Frameworks</CategoryTitle>
            <CategorySkills>Salesforce CPQ, Conga CLM, Docker, CI/CD, Lightning Web Components, 42Crunch, Swagger API</CategorySkills>
          </CategoryInfo>
        </SkillCategory>

        <SkillCategory>
          <CategoryIcon src={`${process.env.PUBLIC_URL}/images/Concepts.png`} alt="Programming Concepts Icon" />
          <CategoryInfo>
            <CategoryTitle>Programming Concepts</CategoryTitle>
            <CategorySkills>OOPS, Data structures and algorithms, DevOps, Agile, SDLC</CategorySkills>
          </CategoryInfo>
        </SkillCategory>

        <SkillCategory>
          <CategoryIcon src={`${process.env.PUBLIC_URL}/images/OS.png`} alt="OS & HPC Icon" />
          <CategoryInfo>
            <CategoryTitle>OS & High-Performance Computing</CategoryTitle>
            <CategorySkills>MacOS, Windows, Linux, Parallel Programming, OpenMP, MPI</CategorySkills>
          </CategoryInfo>
        </SkillCategory>

        <SkillCategory>
          <CategoryIcon src={`${process.env.PUBLIC_URL}/images/AI.png`} alt="AI Technologies Icon" />
          <CategoryInfo>
            <CategoryTitle>AI Technologies</CategoryTitle>
            <CategorySkills>scikit-learn, TensorFlow, Numpy, NLP, Gen AI, XAI</CategorySkills>
          </CategoryInfo>
        </SkillCategory>

        <SkillCategory>
          <CategoryIcon src={`${process.env.PUBLIC_URL}/images/SoftSkills.png`} alt="Soft Skills Icon" />
          <CategoryInfo>
            <CategoryTitle>Soft Skills</CategoryTitle>
            <CategorySkills>Communication, Problem-Solving, Critical Thinking, Teamwork, Adaptability</CategorySkills>
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
  width: 70vw;
  margin: 0 auto;
`;

const SkillCategory = styled.div`
  width: 48%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const CategoryIcon = styled.img`
  width: 40px;
  height: 40px;
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
