import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
background-color: #f9f9f9;
  color: #333;
height: 100vh;
overflow-y: scroll;
padding: 120px 40px 40px;
width: 100vw; /* Take up the entire viewport width */
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h2>Projects</h2>
      {/* Add your projects here */}
    </ProjectsContainer>
  );
};

export default Projects;
