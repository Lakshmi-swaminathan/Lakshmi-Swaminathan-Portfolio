import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  background-color: rgba(77, 76, 76, 0.87);
  color: #fff;
  padding: 40px 20px; /* Adjusted padding */
  width: 100vw; /* Take up the entire viewport width */
`;

const EducationItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px; /* Adjusted max-width */
  width: 100%;
  border: 2px double #3498db; /* Added border around Education items */
  padding: 20px; /* Added padding */
`;

const EducationItem = styled.div`
  flex: 1;
  text-align: center;
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
  margin-bottom: 20px;
  align-self: flex-start; /* Aligned to the left */
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
