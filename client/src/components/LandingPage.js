import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
function LandingPage() {
  return (
    <Justice>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
    </Justice>
  );
}

const Justice = styled.div`
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
  position: absolute;
`;
export default LandingPage;
