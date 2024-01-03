import React from 'react';
import styled,{keyframes} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

const ContactContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  color: #3498db;
  padding: 120px 40px 40px;
  width: 100vw; /* Take up the entire viewport width */
  background-color: #f9f9f9;
  // transition: transform 0.3s ease;

  // &:hover {
  //   animation: ${zoomIn} 0.3s ease-in-out;
  //   transform: scale(1.05);
  // }
`;

const MailIcon = styled.a`
display: inline-block; /* Ensure the link behaves like a block-level element */
height: 100px; /* Adjust the height as needed */
width: 700px; /* Adjust the width as needed */
padding-left: 50px;
margin-right: 10px; /* Add margin for spacing (adjust as needed) */
transition: transform 0.3s ease;
color: rgba(12, 141, 247, 0.87);

  &:hover {
    animation: ${zoomIn} 0.3s ease-in-out;
    transform: scale(1.05);
  }
`; 

const ContactHeader = styled.h2`
  padding-left: 20px; /* Adjust the left padding for h2 tag as needed */
`;

const ContactSection = () => {
  return (
    <ContactContainer id="contact">
      <ContactHeader>Contact</ContactHeader>

      <MailIcon href="mailto:lakshmiswaminathan08@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} style={{ height: '70px', width: '70px', color:'rgba(12, 141, 247, 0.87)' }}/> Email me at lakshmiswaminathan08@gmail.com
      </MailIcon>
    </ContactContainer>
  );
};

export default ContactSection;
