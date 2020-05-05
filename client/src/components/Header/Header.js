import React from "react";
import styled from "styled-components";
import HomeButton from "./HomeButton";
import SignUpIcon from "./SignUpIcon";
import SingInUser from "./SignInUser";
import { useSelector } from "react-redux";
function Header() {
  const user = useSelector((state) => state.user.user);
  const isOn = useSelector((state) => state.user.isSignedIn);
  console.log("user", user, "ON", isOn);
  return (
    <Wrapper>
      {isOn ? (
        <>
          <HomeButton />
          <Tittle>Monocle</Tittle>
          <SingInUser />
        </>
      ) : (
        <>
          <HomeButton />
          <Tittle>Monocle</Tittle>
          <SignUpIcon />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  background: linear-gradient(to right, #304352, #d7d2cc);
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
