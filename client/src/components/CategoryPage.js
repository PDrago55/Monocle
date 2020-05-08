import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import {
  requestArticlesByCategory,
  receiveArticlesByCategory,
  receiveArticlesByCategoryError,
  receiveLinkCategoryArticle,
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
            {categoryArticles.map((article, id) => {
              return (
                <ArticleWrapper id={id} key={id}>
                  <div className="innerCard">
                    <ArticleLink
                      onClick={() => {
                        dispatch(receiveLinkCategoryArticle(article));
                      }}
                      to={`/article/${article.title.split(" ").join("_")}`}
                    >
                      <div>
                        <strong>News Agency:</strong> {article.source.name}
                      </div>
                      <ArticleImage src={article.urlToImage}></ArticleImage>
                      <div>{article.title}</div>
                      <div className="articleD">Author</div>
                      <div>{article.author}</div>
                      <div className="articleD">Article Description</div>
                      <div>{article.description}</div>
                    </ArticleLink>
                  </div>
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
  text-decoration: none;
`;
const ArticleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ArticleWrapper = styled.div`
  padding: 12px;
  border-radius: 16px;
  box-shadow: 2px 5px 36px rgba(0, 0, 0, 0.1);
  text-align: center;
  line-height: 1.5;
  &:hover {
    transform: scale(1.05);
    transform-origin: center;
  }
  .innerCard {
    border: 1px solid black;
    border-radius: 8px;
    padding: 20px 5px;
    background-color: rgb(222, 221, 220);
    opacity: 0.9;
    height: 100%;
  }
  .articleD {
    text-align: center;
    text-decoration: underline;
    font-weight: bold;
  }
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
