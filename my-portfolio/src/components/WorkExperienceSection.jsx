import React from 'react';
import styled,{keyframes} from 'styled-components';


const WorkExperienceContainer = styled.div`
  height: 100%;
  background-color: rgba(77, 76, 76, 0.87);
  color: #fff;
  padding: 40px; /* Increased padding */
  padding-top:70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  color: #333;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;

  &:nth-child(even) {
    margin-left: auto;
    align-items: flex-start;
  }

`;

const ExperienceTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 1.2em;
  align-self: flex-start;
  padding-left: 20px;
`;

const WorkExperienceSection = () => {
  return (
    <WorkExperienceContainer id="work-experience">
       <h2 style={{ paddingLeft: '50px', alignSelf: 'flex-start' }}>Work Experience</h2>
      <Timeline>
        <TimelineBar />
        {/* Experience 3 */}
        <TimelineItem>
          <ExperienceTitle>Research Assistant</ExperienceTitle>
          <p>Purdue University - March 2024 to Present</p>
          <ul>
          <li>working on research on “Effectiveness of brand promotion by AI influencer”. - performed data analysis using classical machine learning models(XAI for explainability) from Scikit Learn(supervised and
unsupervised), deep learning models from TensorFlow, and scipy to analyze large amount of survey data and AI influencer dataset from Kaggle. Generated actionable insights into brand promotion effectiveness; increased model explainability by 49%.</li>
          </ul>
        </TimelineItem>
        {/* Experience 1 */}
        <TimelineItem>
        <ExperienceTitle>Engr II-Software development</ExperienceTitle>
          <p>Verizon, Chennai, India - Jul 2022 to Jun 2023</p>
          <ul>
          <li>Spearheaded an innovative upsell sales process enhancement using Apex and Lightning web components
following Agile methodology, streamlining workflow from ideation to production deployment, reducing process
time by 34%, and increasing upsell conversions by 16%.</li>
           <li>Customized Salesforce CPQ with Lightning Web Components, improving user experience, which led to a 20%
reduction in time spent on complex upsell transactions.</li>
           <li>Designed and Implemented a month-on-month dynamic contracting model in place of a fixed service term model
with Apex, and LWC, resulting in an 11% increase in customer retention and a 14% improvement in service
adaptability.</li>
          </ul>
         </TimelineItem>

        {/* Experience 2 */}
        <TimelineItem>
        <ExperienceTitle>Engr I-Software development</ExperienceTitle>
          <p>Verizon, Chennai, India - Sept 2020 to Jul 2022</p>
          <ul>
          <li>Translated business requirements into technical user stories and consistently delivered on time.</li>
          <li>Collaborated with cross-functional stakeholders, leading to a 100% project completion rate within deadlines.</li>
          <li>Provided insights during design meetings, contributing to the creation of scalable solutions that reduced
operational inefficiencies by 25%.</li>
          <li>Adhered to coding best practices, producing efficient, clean, and reusable code.</li>
          <li>Achieved Salesforce integration and security with a 98% accuracy rating in a 42Crunch security audit for the API</li>
          <li>Resolved Salesforce governor limit exceptions in Apex triggers, reducing execution time from 5s to 15ms, leading
to a 40% increase in system performance during production support.</li>
          </ul>
          </TimelineItem>

        
      </Timeline>
    </WorkExperienceContainer>
  );
};


export default WorkExperienceSection;
