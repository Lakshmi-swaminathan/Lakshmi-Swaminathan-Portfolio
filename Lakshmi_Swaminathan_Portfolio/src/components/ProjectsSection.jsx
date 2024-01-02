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

const ProjectsContainer = styled.section`
color: #f9f9f9;
height: 100vh;
overflow-y: scroll;
padding: 120px 40px 40px;
width: 100vw; /* Take up the entire viewport width */
background-color: rgba(77, 76, 76, 0.87);
&:hover {
    animation: ${zoomIn} 0.3s ease-in-out;
    transform: scale(1.05);
  }
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
