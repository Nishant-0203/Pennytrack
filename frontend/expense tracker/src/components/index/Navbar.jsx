import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #181818;
  color: white;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Push links to the right */
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const Dot = styled.span`
  background-color: #FF9800;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  margin-left: 5px;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: #bbb;
  text-decoration: none;
  font-size: 1em;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #ff9800; /* highlight on hover */
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo>
        MyDues<Dot />
      </Logo>
      <Links>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#Demo">Demo</NavLink>
        <NavLink href="#Review">Review</NavLink>
        <NavLink href="/login">Login</NavLink>
      </Links>
    </Nav>
  );
}

export default Navbar;
