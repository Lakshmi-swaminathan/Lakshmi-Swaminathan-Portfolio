import React, { useState, useEffect } from 'react';
import styled,{keyframes} from 'styled-components';

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

const AwardsSectionContainer = styled.div`
  height: 100vh;
  background-color: #fff;
  color: #000;
  padding: 120px 40px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    animation: ${zoomIn} 0.3s ease-in-out;
    transform: scale(1.05);
  }
`;






const AwardsSection = () => {
  const [simpleThanksCount, setSimpleThanksCount] = useState(0);
  const [personalCommitmentCount, setPersonalCommitmentCount] = useState(0);
  const [accountabilityCount, setAccountabilityCount] = useState(0);
  const [processImprovementCount, setProcessImprovementCount] = useState(0);

    const startCounting = () => {
        const simpleThanksInterval = setInterval(() => {
          setSimpleThanksCount((prevCount) => {
            if (prevCount < 20) {
              return prevCount + 1;
            } else {
              clearInterval(simpleThanksInterval);
              return prevCount;
            }
          });
        }, 100);
    
        const personalCommitmentInterval = setInterval(() => {
          setPersonalCommitmentCount((prevCount) => {
            if (prevCount < 2) {
              return prevCount + 1;
            } else {
              clearInterval(personalCommitmentInterval);
              return prevCount;
            }
          });
        }, 500);
    
        const accountabilityInterval = setInterval(() => {
          setAccountabilityCount((prevCount) => {
            if (prevCount < 1) {
              return prevCount + 1;
            } else {
              clearInterval(accountabilityInterval);
              return prevCount;
            }
          });
        }, 700);
    
        const processImprovementInterval = setInterval(() => {
          setProcessImprovementCount((prevCount) => {
            if (prevCount < 1) {
              return prevCount + 1;
            } else {
              clearInterval(processImprovementInterval);
              return prevCount;
            }
          });
        }, 900);
      };
    
      useEffect(() => {
        startCounting();
      }, []);

        return (
            <AwardsSectionContainer id="awards">
              <h2 style={{ paddingLeft: '50px', alignSelf: 'flex-start', color: 'rgba(59, 160, 243, 0.87' }}>
                Awards Received from Verizon
              </h2>
              <AwardsList>
                <AwardsCategory>
                  <CategoryTitle>Spotlight Awards</CategoryTitle>
                  <AwardItem>
                    Awards for Personal Commitment - {personalCommitmentCount} -{' '}
                    <AwardsLink
                      href="https://drive.google.com/drive/folders/12r6UBXnERNEI5MviBDEama6zBA9F8PpB?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click here to view the awards
                    </AwardsLink>
                  </AwardItem>
                  <AwardItem>
                    Award for Accountability - {accountabilityCount} -{' '}
                    <AwardsLink
                      href="https://drive.google.com/file/d/15yhXu7LZRj0HT35sBg79bv0Yss_ZKKby/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click here to view the award
                    </AwardsLink>
                  </AwardItem>
                  <AwardItem>
                    Award for Quality/Process Improvement - {processImprovementCount} -{' '}
                    <AwardsLink
                      href="https://drive.google.com/file/d/15yhXu7LZRj0HT35sBg79bv0Yss_ZKKby/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click here to view the award
                    </AwardsLink>
                  </AwardItem>
                </AwardsCategory>
                <AwardsCategory>
                  <CategoryTitle>Simple Thanks Awards</CategoryTitle>
                  <AwardItem>
                    Received - {simpleThanksCount} -{' '}
                    <AwardsLink
                      href="https://drive.google.com/drive/folders/1_e6q3S-l-DzlTkNQokKEyc-1Jxp5LNbJ?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click here to view the awards
                    </AwardsLink>
                  </AwardItem>
                </AwardsCategory>
              </AwardsList>
            </AwardsSectionContainer>
          );
        };
        
        const AwardsList = styled.div`
          width: 70%;
          border: 2px solid rgba(191, 225, 253, 0.87);
          padding: 20px;
          border-radius: 10px;
          margin: 20px auto; /* Center the AwardsList */
          text-align: center;
        `;
        
        const AwardsCategory = styled.div`
          margin-bottom: 20px;
        `;
        
        const CategoryTitle = styled.h2`
          margin-bottom: 10px;
          color: rgba(59, 160, 243, 0.87);
        `;
        
        const AwardItem = styled.p`
          margin: 0;
        `;
        
        const AwardsLink = styled.a`
          color: #3498db;
          text-decoration: underline;
          cursor: pointer;
        `;
        
        export default AwardsSection;