import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  color: #3498db;
  padding: 120px 40px 40px;
  width: 100vw; /* Take up the entire viewport width */
  background-color: #f9f9f9;
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
