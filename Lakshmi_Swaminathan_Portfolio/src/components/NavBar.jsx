import React from 'react';
import styled from 'styled-components';

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
        <NavItem>
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default NavBar;
