import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
height: 100vh;
overflow-y: scroll;
padding: 120px 40px 40px;
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
