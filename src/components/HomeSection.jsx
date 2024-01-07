import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(77, 76, 76, 0.87);
  padding: 90px 50px 50px; /* Increased padding for top, left, and right */
  box-sizing: border-box;
  width: 100vw;
  transition: transform 0.3s ease;

  // &:hover {
  //   animation: ${zoomIn} 0.3s ease-in-out;
  //   transform: scale(1.05);
  // }
`;

const MailIcon = styled.a`
width: 60px;
  height: 60px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
  padding-right: 5px;

  &:hover {
    animation: ${zoomIn} 0.3s ease-in-out;
    transform: scale(1.05);
  }
`;

const HomeImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
`;

const ContentContainer = styled.div`
  text-align: left;
  color: #fff;
`;

const Role = styled.h3`
  margin-top: 10px;
  font-weight: bold;
  color: rgba(134, 195, 245, 0.87);
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
  transition: transform 0.3s ease;
  padding-right: 5px;

  &:hover {
    animation: ${zoomIn} 0.3s ease-in-out;
    transform: scale(1.05);
  }
`;

const IconImage1 = styled.img`
  width: 72px;
  height: 72px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;

  &:hover {
    animation: ${zoomIn} 0.3s ease-in-out;
    transform: scale(1.05);
  }
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
    animation: ${zoomIn} 0.3s ease-in-out;
    background-color: #2980b9;
  }
`;

const HomeSection = () => {
  return (
    <HomeContainer id="home">
      <ContentContainer>
        <HomeImage src="../images/Lakshmi.jpg" alt="Lakshmi Swaminathan" />
        <h1>Lakshmi Swaminathan</h1>
        <Role>Full Stack Developer <br /> Master's in Computer Science, Purdue University <br /> Ex-SDE-II at Verizon<br /></Role>
        <DownloadButton href="../Lakshmi_Swaminathan_Resume.pdf" download>
          Download Resume
        </DownloadButton>
      </ContentContainer>
      <IconsContainer>
        <IconLink href="https://github.com/Lakshmi-swaminathan" target="_blank" rel="noopener noreferrer">
          <IconImage src="../images/github-mark-white.png" alt="GitHub" />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/lakshmi-swaminathan-g/" target="_blank" rel="noopener noreferrer">
          <IconImage1 src="../images/Linkedin_Logo_biggest.png" alt="LinkedIn" />
        </IconLink>
        <MailIcon href="mailto:lakshmiswaminathan08@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} style={{ height: '60px', width: '60px', color:'rgba(12, 141, 247, 0.87)' }}/>
      </MailIcon>
      </IconsContainer>
    </HomeContainer>
  );
};

export default HomeSection;
