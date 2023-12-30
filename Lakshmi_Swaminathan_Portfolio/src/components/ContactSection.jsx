import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  background-color: #ecf0f1;
  color: #333;
  padding: 120px 40px 40px;
`;

const ContactSection = () => {
  return (
    <ContactContainer id="contact">
      <h2>Contact</h2>
      {/* Add your contact information here... */}
    </ContactContainer>
  );
};

export default ContactSection;
