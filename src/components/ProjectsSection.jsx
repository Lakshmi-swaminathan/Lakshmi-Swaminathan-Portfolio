import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

const ProjectsContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  color: #fff;
  padding: 120px 40px 40px;
  width: 100vw;
  background-color: rgba(77, 76, 76, 0.87);
  // &:hover {
  //   animation: ${zoomIn} 0.5s ease-in-out;
  //   transform: scale(1.05);
  // }
`;

const ProjectTile = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
  padding: 10px;
  padding-top:70px;
  padding-bottom:70px;
  border: 1px solid #fff;
  border-radius: 8px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  width: 70%;
  margin: 0 auto;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    animation: ${zoomIn} 0.5s ease-in-out;
  }
`;


const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const UniversityName = styled.p`
  margin: 0;
  font-size: 1rem;
  opacity: 0.8;
`;

const ProjectDescription = styled.p`
  margin-top: 10px;
  font-size: 1rem;
`;

const ProjectLink = styled.a`
color: #3498db;
text-decoration: underline;
cursor: pointer;
`;

const ProjectContent=styled.div`
padding-top:120px;
`;

const ProjectLinkContainer = styled.div`
  margin-top: 10px;
`;

const projectsData = [
  {
    title: 'MERN Stack project - “A Marketplace”',
    university: 'Purdue University, Fort Wayne',
    description:
      'The project Marketplace is built using MERN stack. "Marketplace is where the user sells or buys things online from each other". The project frontend is hosted using netlify and the backend is hosted using render.com.',
    link: 'https://main--stellular-frangollo-39676b.netlify.app/'
  },
  {
    title: 'Facial Expression Recognition',
    university: 'Sastra University',
    description: 'A deep learning project built using CNN model ~ 66% accuracy',
  },
  
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProject(index === selectedProject ? null : index);
  };

  return (
    <ProjectsContainer id="projects">
      <h2 style={{ paddingLeft: '50px', alignSelf: 'flex-start' }}>Technical Projects</h2>
      <ProjectContent>
      {projectsData.map((project, index) => (
        <ProjectTile key={index} onClick={() => handleProjectClick(index)}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <UniversityName>{project.university}</UniversityName>
          {selectedProject === index && (
            <>
              <ProjectDescription dangerouslySetInnerHTML={{ __html: project.description }} />
              {project.link && (
                <ProjectLinkContainer>
                  <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                    Click here to view the project
                  </ProjectLink>
                </ProjectLinkContainer>
              )}
            </>
          )}
        </ProjectTile>
      ))}
      </ProjectContent>
    </ProjectsContainer>
  );
};

export default Projects;
