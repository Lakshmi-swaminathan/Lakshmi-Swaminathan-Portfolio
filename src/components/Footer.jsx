import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  height: 100vh;
  overflow-y: scroll; 
  background-color: #242424;
  color: #fff;
  text-align: center;
  padding: 120px 40px 40px;
  width: 100vw; /* Take up the entire viewport width */
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Your Portfolio. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
