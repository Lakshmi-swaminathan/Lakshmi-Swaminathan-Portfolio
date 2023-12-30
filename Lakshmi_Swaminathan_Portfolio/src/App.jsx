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

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  width: 100vw; /* Full viewport width */

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
      <ProjectsSection />
      <ContactSection />
    </Container>
  );
};

export default App;
