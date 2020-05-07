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
        <div className="methodBorder">
          In the <strong>Alpha Stage</strong> of this application, Monocle
          intends to offer users the ability to search and consume news,{" "}
          <strong>appropriately.</strong>
        </div>
      </Methods>
      <WhiteBackground></WhiteBackground>
      <BlackBg>
        <CardContainer>
          <GreyCard>
            <h1>Popular Opinion</h1>
            <div className="bg">
              <img
                src="/assets/people-opinion.png"
                alt="opinion"
                className="img"
              ></img>
            </div>
          </GreyCard>
          <GreyCard>
            <h1>Individual Opinion</h1>
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
            <h1>Content-Analysis</h1>
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
      </BlackBg>
    </>
  );
}

const TitleContainer = styled.div`
  text-align: center;
  border: 1px solid black;
  background: linear-gradient(to right, #304352, #d7d2cc);
`;

const WhiteBackground = styled.div`
  background-color: white;
  width: 100vw;
  height: 250px;
`;

const GreyBox = styled.div`
  position: absolute;
  background-color: rgb(222, 221, 220);
  width: 330px;
  top: 300px;
  left: 500px;
  text-align: center;
  border-radius: 15px;
  padding: 5px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.45);
`;

const BlackBg = styled.div`
  background-color: black;
  width: 100vw;
  height: 250px;
  margin-bottom: 64px;
`;

const Methods = styled.div`
  position: absolute;
  width: 750px;
  height: 175px;
  left: 350px;
  top: 600px;
  background-color: rgb(222, 221, 220);
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  padding: 15px 8px;
  border-radius: 15px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.45);
  .methodBorder {
    border: 2px solid black;
    padding-bottom: 35px;
    border-radius: 7px;
    &:hover {
      background-color: white;
    }
  }
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 275px;
  height: 315px;
  background-color: rgb(222, 221, 220);
  border-radius: 15px;

  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.45);
  top: -50px;
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
