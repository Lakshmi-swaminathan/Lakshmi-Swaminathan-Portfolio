import React from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import AwardsSection from './components/AwardsSection';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
overflow-x: hidden;
background-color: #1a1a1a;
color: #fff;
`;


const App = () => {
  return (
    <Container>
      <NavBar />
      
      <HomeSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <WorkExperienceSection />
      <AwardsSection/>
      <ProjectsSection />
      <ContactSection />
    </Container>
  );
};

export default App;
