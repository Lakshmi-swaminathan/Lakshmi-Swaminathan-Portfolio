import React from 'react';
import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #242424;
  padding: 10px 20px;
  z-index: 1000;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.li`
  margin-right: 20px;
  &:hover {
    animation: ${zoomIn} 0.3s ease-in-out;
    transform: scale(1.05);
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

const NavBar = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLink href="#home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#education">Education</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#skills">Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#work-experience">Work Experience</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#awards">Awards</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#projects">Projects</NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default NavBar;
