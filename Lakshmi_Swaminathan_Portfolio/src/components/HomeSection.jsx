import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:  rgba(77, 76, 76, 0.87);
  padding: 0 20px;
  box-sizing: border-box; /* Include padding and borders in the width calculation */
  width: 100vw; /* Take up the entire viewport width */
`;

const HomeImage = styled.img`
  width: 200px;
  height: 300px; /* Adjust the size as needed */
  object-fit: cover; /* Maintain aspect ratio */
  border-radius: 10px;
  margin-right: 20px;
`;

const ContentContainer = styled.div`
  text-align: left;
  color: #fff; /* White text color */
`;

const Role = styled.p`
  margin-top: 10px;
  font-weight: bold;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const IconImage = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

const IconLink = styled.a`
  text-decoration: none;
  color: #3498db;
  font-size: 24px;

  &:hover {
    color: #2980b9;
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;
const HomeSection = () => {
    return (
      <HomeContainer id="home">
        <ContentContainer>
          <HomeImage src="../../public/images/Lakshmi.jpg" alt="Lakshmi Swaminathan" />
          <h1>Lakshmi Swaminathan</h1>
          <Role>Full Stack Developer <br/> Master's in Computer Science, Purdue University <br/> Ex-SDE-II at Verizon<br/></Role>
          <DownloadButton href="../../public/Lakshmi_Swaminathan_Resume.pdf" download>
            Download Resume
          </DownloadButton>
        </ContentContainer>
        <IconsContainer>
          <IconLink href="https://github.com/Lakshmi-swaminathan" target="_blank" rel="noopener noreferrer">
          <IconImage src=".../../public/images/Github_icon.png" alt="GitHub" />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/lakshmi-swaminathan-g/" target="_blank" rel="noopener noreferrer">
          <IconImage src="../../public/images/LinkedIn.png" alt="LinkedIn" />
          </IconLink>
        </IconsContainer>
      </HomeContainer>
    );
  };

export default HomeSection;
