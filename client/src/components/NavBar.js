import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <NavContainer>
      <StyledLink to="/categories/sports">Sports</StyledLink>
      <StyledLink to="/categories/technology">Tech</StyledLink>
      <StyledLink to="/categories/science">Science</StyledLink>
      <StyledLink to="/categories/general">General</StyledLink>
      <StyledLink to="/categories/health">Health</StyledLink>
      <StyledLink to="/categories/business">Business</StyledLink>
      <StyledLink to="/categories/entertainment">Culture</StyledLink>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 0.25;
  background-color: rgba(196, 196, 196, 0.3);
  padding: 20px 0px;
  box-shadow: 0px 0px 7px 7px #67636326;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  padding: 0px 20px;
  border-radius: 8px;
  text-shadow: 0px 2px 7px #000000;
  &: hover {
    background-color: black;
    color: white;
  }
`;
export default NavBar;
