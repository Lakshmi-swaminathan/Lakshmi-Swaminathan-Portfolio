import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  background-color:  rgba(77, 76, 76, 0.87);
  color: #fff;
  padding: 120px 40px 40px;
  width: 100vw; /* Take up the entire viewport width */
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
