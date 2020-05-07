import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <ImageContainer>
      <Link to="/">
        <img
          src="/assets/pandamonocle.png"
          className="test"
          alt="logo"
          width="80px"
          height="80px"
        ></img>
      </Link>
    </ImageContainer>
  );
};
const ImageContainer = styled.div`
  .test {
    &:hover {
      transform: scale(1);
      transform-origin: center;
    }
  }
`;
export default HomeButton;
