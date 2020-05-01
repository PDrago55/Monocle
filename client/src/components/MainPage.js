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
  console.log(myArticle);
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
              return (
                <>
                  <h2>{item.title}</h2>
                  <img src={item.urlToImage} width="200px" height="200px"></img>
                  <h3>By: {item.author}</h3>
                  <div>Rating:</div>
                </>
              );
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
export default MainPage;
