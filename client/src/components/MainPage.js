import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  requestArticle,
  receiveArticle,
  receiveArticleError,
} from "../actions";
import { LinearProgress } from "@material-ui/core";
import NavBar from "./NavBar";

//-----import icons----//
import { Icon } from "react-icons-kit";
import { circle_down } from "react-icons-kit/ikons/circle_down";
import { circle_up } from "react-icons-kit/ikons/circle_up";

function MainPage() {
  const dispatch = useDispatch();
  const myArticle = useSelector((state) => state.article.article);
  const state = useSelector((state) => state.article.status);
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
  console.log("here", article.title.split("-").join(" "));
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
              console.log(
                "item",
                item.title,
                "article",
                article.title,
                "COMPARE",
                item.title == article.title.split(/[\-_]/).join(" ")
              );
              if (item.title == article.title.split(/[\-_]/).join(" ")) {
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
                    <div className="rating">Rating:</div>
                    <IconContainer>
                      <Icon icon={circle_up} size={45}></Icon>
                      <Icon icon={circle_down} size={45}></Icon>
                    </IconContainer>
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
  left: 0px;
  top: 0px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
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
  .rating {
    font-size: 25px;
    text-align: center;
  }
`;
const ImgContainer = styled.div`
  position: relative;
  margin-left: 410px;
  margin-bottom: -84px;
  bottom: 57px;
`;
const Space = styled.div`
  padding-top: 122px;
`;
const ArticleCard = styled.div`
  width: 415px;
  height: 466px;
  margin-left: 91px;
  padding: 25px;
  left: 48px;
  top: 170px;
  background-color: rgba(196, 196, 196, 0.46);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.65);
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;
export default MainPage;
