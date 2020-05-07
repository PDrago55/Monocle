import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
function LandingPage() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Justice />
      </ImageWrapper>
      <SearchContainer>
        <h1 className="welcome">Welcome to Monocle</h1>
        <SearchBar />
      </SearchContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const ImageWrapper = styled.div`
  width: 50%;
  height: 50%;
`;
const Justice = styled.div`
  position: relative;
  background-image: url("/assets/ladyjustice.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 50%;
  height: 100%;
  background-color: rgb(222, 221, 220);
  .welcome {
    text-shadow: 0px 1px 1px #000000;
  }
`;
export default LandingPage;
