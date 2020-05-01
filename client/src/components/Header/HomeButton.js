import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <ImageContainer>
      <Link to="/">
        <img src="/assets/logo.png" alt="logo" width="80px" height="80px"></img>
      </Link>
      <div></div>
      <div></div>
    </ImageContainer>
  );
};
const ImageContainer = styled.div`
  background-color: #ffffff;
`;
export default HomeButton;
