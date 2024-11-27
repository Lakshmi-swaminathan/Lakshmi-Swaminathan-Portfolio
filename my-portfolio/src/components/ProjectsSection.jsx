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
`;

const ProjectTile = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
  padding: 10px;
  padding-top: 70px;
  padding-bottom: 70px;
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

const ProjectContent = styled.div`
  padding-top: 120px;
`;

const ProjectLinkContainer = styled.div`
  margin-top: 10px;
`;

const projectsData = [
  {
    title: 'MERN Stack project - “A Marketplace”',
    university: 'Purdue University, Fort Wayne',
    description:
      'A platform where individuals can buy or sell products. Completed end-to-end testing using Cypress framework.',
    link: 'https://main--stellular-frangollo-39676b.netlify.app/',
  },
  {
    title: 'Machine Learning Projects',
    university: 'Purdue University, Fort Wayne',
    description: `
      <ul>
        <li><strong>NLP Project:</strong> Worked on generating Linux commands based on user input text (Application of GenAI for text) using models like T5 base, T5 small, BART base, and various BiLSTM-based encoder-decoder architectures with attention mechanisms and reinforcement learning using BLEU score.</li>
        <li><strong>Research Paper Re-implementation:</strong> Re-implemented Nicholas Carlini's research paper "Extracting training data from large language models" and enhanced it with Differential Privacy, improving data privacy and model security by 25%.</li>
        <li><strong>AI Influencer Research:</strong> Currently analyzing the effectiveness of brand promotion by AI influencers using classical ML models (XAI for explainability), TensorFlow-based deep learning models, and large datasets from Kaggle. Increased model explainability by 49%.</li>
      </ul>
    `,
  },
  {
    title: 'Parallelized Sobel Edge Detection Algorithm',
    university: 'Purdue University, Fort Wayne',
    description: 'Parallelized the Sobel Edge Detection algorithm using OpenMP (Parallel for, Parallel for collapsed, SIMD), achieving a 3x speedup using both static and dynamic memory allocation.',
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
