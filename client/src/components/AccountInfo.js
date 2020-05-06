import React from "react";
import { useSelector } from "react-redux";

function AccountInfo() {
  const savedArticle = useSelector((state) => state.saved.saved);
  let test = localStorage.setItem("article(s)", savedArticle);
  let test2 = localStorage.getItem("article(s)");
  console.log(savedArticle, "test", test, "test2", test2);
  return (
    <>
      <div>Account Info</div>
      <h1>Saved Articles</h1>
      {savedArticle.map((article) => {
        return (
          <>
            <h1>{article.title}</h1>
            <img src={article.urlToImage}></img>
            <h4>{article.description}</h4>
          </>
        );
      })}
    </>
  );
}

export default AccountInfo;
