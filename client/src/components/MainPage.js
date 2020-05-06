import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  requestArticle,
  receiveArticle,
  receiveArticleError,
  receiveSavedArticle,
} from "../actions";
import { LinearProgress } from "@material-ui/core";
import NavBar from "./NavBar";

//-----import icons----//
import { Icon } from "react-icons-kit";
import { circle_down } from "react-icons-kit/ikons/circle_down";
import { circle_up } from "react-icons-kit/ikons/circle_up";
import { heart } from "react-icons-kit/feather/heart";

function MainPage() {
  const dispatch = useDispatch();
  const myArticle = useSelector((state) => state.article.article);
  const state = useSelector((state) => state.article.status);
  const isOn = useSelector((state) => state.user.isSignedIn);
  const article = useParams();
  useEffect(() => {
    dispatch(requestArticle());
    fetch(`/articles/${article.title}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(receiveArticle(data.article));
      })
      .catch((error) => {
        dispatch(receiveArticleError(error));
      });
  }, []);
  // console.log(myArticle);
  // console.log("here", article.title.split("-").join(" "));

  const handleSavedArticle = (article) => {
    fetch("/savedarticle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        article,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Balance>
      {state === "loading" ? (
        <LinearProgress />
      ) : (
        <>
          <NavBar />
          <Space></Space>
          <ArticleCard>
            <ImgContainer>
              <img src="/assets/info.png" height="60px" width="60px"></img>
            </ImgContainer>
            {myArticle.map((item) => {
              if (item.title === article.title.split("_").join(" ")) {
                return (
                  <Container>
                    <h2 className="title">{item.title}</h2>
                    <img
                      className="img"
                      src={item.urlToImage}
                      width="200px"
                      height="200px"
                    ></img>
                    <div className="author">By: {item.author}</div>
                    <a href={item.url} className="test">
                      <div className="mediaOrg">
                        Media Site: {item.source.name}
                      </div>
                    </a>
                    <div className="rating">User Rating</div>
                    <div className="wordContainer">
                      <div>Agree</div>
                      <div>Disagree</div>
                    </div>
                    {isOn ? (
                      <div className="IconContainer">
                        <form>
                          <Icon
                            className="up"
                            onClick={() => console.log("UPVOTE")}
                            icon={circle_up}
                            size={45}
                          ></Icon>
                          <Icon
                            className="heart"
                            icon={heart}
                            size={45}
                            onClick={() => {
                              handleSavedArticle(item);
                              dispatch(receiveSavedArticle(item));
                            }}
                          ></Icon>
                          <Icon
                            className="down"
                            onClick={() => console.log("DownVOTE")}
                            icon={circle_down}
                            size={45}
                          ></Icon>
                        </form>
                      </div>
                    ) : (
                      <div> Please Sign in to use these Features</div>
                    )}
                  </Container>
                );
              }
            })}
          </ArticleCard>
        </>
      )}
    </Balance>
  );
}

const Balance = styled.div`
  background-image: url("/assets/balance.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  text-shadow: 0px 2px 7px #000000;
  .title {
    text-align: center;
    font-weight: bold;
    margin: 0px;
    text-shadow: 2px 2px 2px rgba(206, 89, 55, 0);
  }
  .img {
    margin-left: 120px;
  }
  .author {
    font-weight: bold;
    font-size: 18px;
    text-shadow: 2px 2px 2px rgba(206, 89, 55, 0);
  }
  .test {
    text-decoration: none;
    color: black;
  }
  .mediaOrg {
    font-weight: bold;
    font-size: 18px;
    text-shadow: 2px 2px 2px rgba(206, 89, 55, 0);
  }
  .rating {
    font-size: 25px;
    text-align: center;
  }
  .wordContainer {
    display: flex;
    justify-content: space-between;
    font-size: 25px;
    margin-top: 25px;
  }
  .IconContainer {
    display: flex;
    justify-content: space-between;
    position: relative;
    .down {
      cursor: pointer;
      &:hover {
        color: white;
        opacity: 0.9;
      }
    }
    .up {
      cursor: pointer;
      &:hover {
        color: white;
        opacity: 0.9;
      }
    }
    .heart {
      cursor: pointer;
      &:hover {
        color: red;
        opacity: 0.9;
      }
    }
  }
`;
const ImgContainer = styled.div`
  position: relative;
  margin-left: 490px;
  margin-bottom: -84px;
  bottom: 57px;
`;
const Space = styled.div`
  padding-top: 122px;
`;
const ArticleCard = styled.div`
  width: 500px;
  height: 500px;
  margin-left: 91px;
  padding: 25px;
  left: 48px;
  top: 170px;
  background-color: rgba(196, 196, 196, 0.75);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.65);
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  margin-top: 24px;
`;
export default MainPage;
