import React from "react";
import styled from "styled-components";

function About() {
  return (
    <>
      <TitleContainer>
        <h1>About and Methodology</h1>
      </TitleContainer>

      <WhiteBackground></WhiteBackground>
      <GreyBox>
        <img src="/assets/pandamonocle.png" height="150px" width="150px"></img>
      </GreyBox>
      <BlackBg></BlackBg>
      <Methods>
        In the <strong>Alpha Stage</strong> of this application, Monocle intends
        to offer users the ability to search and consume news,{" "}
        <strong>appropriatly.</strong>
      </Methods>
      <WhiteBackground></WhiteBackground>
      <BlackBg></BlackBg>
      <CardContainer>
        <GreyCard>
          <div className="bg">
            <img
              src="/assets/people-opinion.png"
              alt="opinion"
              className="img"
            ></img>
          </div>
        </GreyCard>
        <GreyCard>
          <div className="bg">
            <img
              src="/assets/user-input.png"
              alt="user"
              height="200px"
              width="200px"
            ></img>
          </div>
        </GreyCard>
        <GreyCard>
          <div className="bg">
            <img
              alt="content"
              src="/assets/content-analysis.png"
              height="200px"
              width="200px"
            ></img>
          </div>
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
  width: 330px;
  top: 300px;
  left: 500px;
  text-align: center;
  border-radius: 15px;
  padding: 5px;
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
  padding: 15px 8px;
  border-radius: 15px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 15px;
`;

const GreyCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 275px;
  height: 315px;
  background-color: #c4c4c4;
  border-radius: 15px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  top: -300px;
  &:hover {
    transform: scale(1.05);
    transform-origin: center;
  }
  .bg {
    position: relative;
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 15px;
  }
`;
export default About;
