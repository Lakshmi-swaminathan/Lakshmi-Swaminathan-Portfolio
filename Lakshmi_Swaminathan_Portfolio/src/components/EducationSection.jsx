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

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: scroll;
  background-color: rgba(77, 76, 76, 0.87);
  color: #fff;
  // padding: 40px 20px;
  width: 100vw;
  border: 2px double #3498db; /* Common border around the entire component */
  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px;
  transition: transform 0.3s ease; /* Added transition for animation */
  &:hover {
    animation: ${zoomIn} 0.3s ease-in-out; /* Applied the zoom-in animation on hover */
    transform: scale(1.05);
  }
`;

const EducationItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  width: 100%;
`;

const EducationItem = styled.div`
  width: 45%;
  text-align: center;
  padding: 70px;
  border: 2px double #3498db;
  border-radius: 10px;
  &:not(:last-child) {
    border-right: none;
  }
`;

const UniversityLogo = styled.img`
  width: 50px;
  margin-bottom: 10px;
`;

const UniversityName = styled.h3`
  margin-bottom: 5px;
`;

const DegreeInfo = styled.p`
  margin-bottom: 5px;
`;

const GPA = styled.p`
  font-weight: bold;
`;

const SectionHeading = styled.h2`
  color: #3498db;
  align-self: flex-start;
  margin-bottom: 20px;
  // padding: 60px 90px 90px;
  padding-left: 90px;
`;

const EducationSection = () => {
  return (
    <EducationContainer id="education">
      <SectionHeading>Education</SectionHeading>
      <EducationItemsContainer>
        <EducationItem>
          <UniversityLogo src="../../public/images/Purdue_logo.png" alt="Purdue University Logo" />
          <UniversityName>Purdue University, Fort Wayne</UniversityName>
          <DegreeInfo>Aug 2023 - May 2025</DegreeInfo>
          <DegreeInfo>Master's in Computer Science</DegreeInfo>
          <GPA>3.67/4.0 GPA</GPA>
        </EducationItem>

        <EducationItem>
          <UniversityLogo src="../../public/images/Sastra_Logo.jpeg" alt="Sastra University Logo" />
          <UniversityName>Sastra University</UniversityName>
          <DegreeInfo>June 2016 - Nov 2020</DegreeInfo>
          <DegreeInfo>Bachelor of Technology in Computer Science Engineering</DegreeInfo>
          <GPA>7.19/10.00 CGPA</GPA>
        </EducationItem>
      </EducationItemsContainer>
    </EducationContainer>
  );
};

export default EducationSection;
