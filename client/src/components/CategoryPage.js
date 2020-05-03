import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import {
  requestArticlesByCategory,
  receiveArticlesByCategory,
  receiveArticlesByCategoryError,
} from "../actions";
import { LinearProgress } from "@material-ui/core";

function CategoryPage() {
  const dispatch = useDispatch();
  const categoryArticles = useSelector((state) => state.category.category);
  const state = useSelector((state) => state.category.status);
  const { category } = useParams();
  useEffect(() => {
    dispatch(requestArticlesByCategory());
    fetch(`/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(receiveArticlesByCategory(data.articles));
      })
      .catch((err) => {
        dispatch(receiveArticlesByCategoryError(err));
      });
  }, [category]);
  return (
    <BackDrop>
      {state === "loading" ? (
        <LinearProgress />
      ) : (
        <>
          <NavBar />
          <h1>{`Headlines from ${category.toUpperCase()}`}</h1>
          <CategoryWrapper>
            {categoryArticles.map((article) => {
              return (
                <ArticleWrapper>
                  <div>News Agency: {article.source.name}</div>
                  <ArticleImage src={article.urlToImage}></ArticleImage>
                  <div>{article.title}</div>
                  <div>Author: {article.author}</div>
                  <div>{article.content}</div>
                </ArticleWrapper>
              );
            })}
          </CategoryWrapper>
        </>
      )}
    </BackDrop>
  );
}

const CategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 30px;
  margin: 32px 0;
`;

const ArticleWrapper = styled.div`
  padding: 36px;
  border-radius: 16px;
  box-shadow: 2px 5px 36px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const BackDrop = styled.div`
  width: 100%;
  background: linear-gradient(to right, #304352, #d7d2cc);
`;

const ArticleImage = styled.img`
  border-radius: 15px;
  width: 100%;
`;
export default CategoryPage;
