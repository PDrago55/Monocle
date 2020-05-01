import React from "react";
import styled from "styled-components";
import HomeButton from "./HomeButton";
import SignUpIcon from "./SignUpIcon";
function Header() {
  return (
    <Wrapper>
      <HomeButton />
      <Tittle>Monocle</Tittle>
      <SignUpIcon />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  background-color: #ffffff;
`;

const Tittle = styled.div`
  font-size: 68px;
  font-weight: 800;
  color: black;
  margin: 0;
  margin-left: 10px;
  align-self: center;
  text-shadow: 0px 2px 7px rgba(0, 0, 0, 0);
`;
export default Header;
