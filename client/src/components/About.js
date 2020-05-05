import React from "react";
import styled from "styled-components";

function About() {
  return (
    <>
      <TitleContainer>
        <h1>About Section and Methodology</h1>
      </TitleContainer>

      <WhiteBackground></WhiteBackground>
      <GreyBox>
        Hello
        <img src="/assets/pandamonocle.png" height="150px" width="150px"></img>
      </GreyBox>
      <BlackBg></BlackBg>
      <Methods>
        In the Alpha Stage of this application, Monocle intends to offer users
        the ability to search and consume news, appropriatly. By...
      </Methods>
      <WhiteBackground></WhiteBackground>
      <BlackBg></BlackBg>
      <CardContainer>
        <GreyCard>
          <img src="/assets/people-opinion.png"></img>
        </GreyCard>
        <GreyCard>
          <img src="/assets/user-input.png" height="200px" width="200px"></img>
        </GreyCard>
        <GreyCard>
          <img
            src="/assets/content-analysis.png"
            height="200px"
            width="200px"
          ></img>
        </GreyCard>
      </CardContainer>
    </>
  );
}

const TitleContainer = styled.div`
  text-align: center;
  border: 1px solid red;
`;

const WhiteBackground = styled.div`
  background-color: white;
  width: 100vw;
  height: 250px;
`;

const GreyBox = styled.div`
  position: absolute;
  background-color: #c4c4c4;
  width: 430px;
  height: 200px;
  top: 300px;
  left: 500px;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const BlackBg = styled.div`
  background-color: black;
  width: 100vw;
  height: 250px;
`;

const Methods = styled.div`
  position: absolute;
  width: 750px;
  height: 175px;
  left: 350px;
  top: 600px;
  background-color: #c4c4c4;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const GreyCard = styled.div`
  position: relative;
  width: 275px;
  height: 315px;
  background-color: #c4c4c4;
  border-radius: 15px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  top: -300px;
`;
export default About;
