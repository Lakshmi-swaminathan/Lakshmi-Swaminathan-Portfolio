import React from 'react';
import styled from 'styled-components';

const WorkExperienceContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  background-color: rgba(77, 76, 76, 0.87);
  color: #fff;
  padding: 120px 40px 40px;
  width: 100vw;
`;

const Timeline = styled.div`
  margin-top: 20px;
  position: relative;
`;

const TimelineBar = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #fff;
  z-index: 1;
`;

const TimelineItem = styled.div`
  position: relative;
  padding: 10px; /* Adjusted padding for a smaller card */
  border-radius: 10px;
  margin-bottom: 10px; /* Adjusted margin for a smaller gap between cards */
  background-color: #fff; /* Set background color to white */
  color: #333; /* Adjusted text color for better visibility */
  max-width: 50%; /* Adjusted max-width for a smaller card */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left for odd items */
  z-index: 2;

  &:nth-child(even) {
    margin-left: auto;
    align-items: flex-start; /* Align items to the left for even items */
  }
`;

const ExperienceTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 1.2em; /* Adjusted font size for a smaller card */
  align-self: flex-start; /* Align title to the left */
`;

const WorkExperienceSection = () => {
  return (
    <WorkExperienceContainer id="work-experience">
       <h2 style={{ paddingLeft: '20px' }}>Work Experience</h2>
      <Timeline>
        <TimelineBar />
        {/* Experience 1 */}
        <TimelineItem>
          <ExperienceTitle>Engr I-Software development</ExperienceTitle>
          <p>Verizon, Chennai, India - Sept 2020 to Jul 2022</p>
          <ul>
          <li>Translated requirements into user stories and consistently delivered on time.</li>
            <li>Collaborated with cross-functional stakeholders to ensure project success.</li>
            <li>Provided valuable insights for scalable problem-solving solutions during Design meetings.</li>
            <li>Adhered to coding best practices, producing efficient, clean, and reusable code.</li>
            <li>Mastered the technical architecture, covering lead generation, customer information maintenance, sales processes, and customer retention strategies.</li>
            <li>Achieved Salesforce integration and security with a 98% accuracy rating in a 42Crunch security audit.</li>
            <li>Resolved Salesforce governor limit exceptions through optimized coding and refined debugging skills during production support.</li>
          </ul>
        </TimelineItem>

        {/* Experience 2 */}
        <TimelineItem>
          <ExperienceTitle>Engr II-Software development</ExperienceTitle>
          <p>Verizon, Chennai, India - Jul 2022 to Jun 2023</p>
          <ul>
          <li>Spearheaded an innovative upsell sales process enhancement.</li>
           <li>Customized Salesforce CPQ with Lightning Web Components.</li>
           <li>Designed and Implemented a dynamic contracting model.</li>
          </ul>
        </TimelineItem>

        {/* Experience 3 */}
        <TimelineItem>
          <ExperienceTitle>SDE - Intern</ExperienceTitle>
          <p>Verizon, Chennai, India - Feb 2020 to May 2020</p>
          <ul>
          <li>Learned and worked in Apex, Aura, Visualforce, Salesforce flows, Objects in Salesforce, Apex triggers, Javascript, SOQL, etc.</li>
          </ul>
        </TimelineItem>
      </Timeline>
    </WorkExperienceContainer>
  );
};

export default WorkExperienceSection;
