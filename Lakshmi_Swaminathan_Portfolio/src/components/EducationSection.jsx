import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: scroll;
  background-color: rgba(77, 76, 76, 0.87);
  color: #fff;
  padding: 40px 20px;
  width: 100vw;
`;

const EducationItemsContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Place items horizontally next to each other */
  max-width: 800px;
  width: 100%;
  border: 2px double #3498db; /* Common border around items */
  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px; /* Space education away from the top */
`;

const EducationItem = styled.div`
  width: 45%; /* Make items a bit wider */
  text-align: center;
  padding: 20px;
  border-right: 2px double #3498db; /* Border between items */
  &:last-child {
    border-right: none; /* Remove border on the last item */
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
  padding: 60px 90px 90px; /* Increased padding for top, left, and right */
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
          <GPA>7.1981/10.00 CGPA</GPA>
        </EducationItem>
      </EducationItemsContainer>
    </EducationContainer>
  );
};

export default EducationSection;
