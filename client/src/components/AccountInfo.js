import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
function AccountInfo() {
  const savedArticle = useSelector((state) => state.saved.saved);
  const user = useSelector((state) => state.user.user);
  const [articles, setArticle] = useState([]);
  localStorage.setItem("currentUser", user.signin);
  const email = localStorage.getItem("currentUser");
  // let test2 = localStorage.getItem("article(s)");
  // console.log(savedArticle, "test", test, "test2", test2);
  useEffect(() => {
    fetch(`/myarticle/${user.signin}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.article);
        setArticle(data.article);
      });
  }, []);
  console.log("ARTICLE?", articles);
  return (
    <>
      <Head>Saved Articles</Head>
      {articles.map((article) => {
        return (
          <ArticleWrapper>
            <h1>{article.title}</h1>
            <h2>Agency: {article.source.name}</h2>
            <img src={article.image} width="300px" height="300px"></img>
            <h4>{article.description}</h4>
            <a className="link" href={article.url}>
              <div className="articleLink">For the full Article.</div>
            </a>
          </ArticleWrapper>
        );
      })}
    </>
  );
}

const Head = styled.h1`
  text-align: center;
`;
const ArticleWrapper = styled.div`
  padding: 36px;
  border-radius: 16px;
  box-shadow: 2px 5px 36px rgba(0, 0, 0, 0.1);
  text-align: center;
  .link {
    text-decoration: none;
    color: black;
  }
`;
export default AccountInfo;
