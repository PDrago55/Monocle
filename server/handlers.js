"use strict";
//-------MongoClient DB setUp-------//

const { MongoClient } = require("mongodb");

// ------- using newsAPI library ---------//
require("dotenv").config();
const NewsApi = require("newsapi");
const newsapi = new NewsApi(process.env.API_KEY);

//-------handleHeadlines-----------------//

const topHeadlines = (req, res) => {
  newsapi.v2
    .topHeadlines({
      language: "en",
      country: "us",
    })
    .then((data) => res.json({ headlines: data }))
    .catch((err) => console.log(err));
};

//-----------------handleRightWing-------------//

const handleRightWing = (req, res) => {
  newsapi.v2
    .everything({
      sources:
        "breitbart-news, business-insider, fox-news, the-american-conservative, the-wall-street-journal, the-washington-times, fortune, National Review",
      language: "en",
    })
    .then((data) => res.json({ right: data.articles, leaning: "right" }));
};

//-----------------handleLeftWing----------------//

const handleLeftWing = (req, res) => {
  newsapi.v2
    .everything({
      sources:
        "al-jazeera-english, abc-news, buzzfeed, cbs-news, cnbc, cnn, entertainment-weekly, google-news, mashable, msnbc, NBC News, Newsweek, new-york-magazine, politico, the-huffington-post, the-washington-post, time, wired",
      language: "en",
    })
    .then((data) => res.json({ left: data.articles, leaning: "left" }));
};

//--------------handleCenterConcepts--------------//

const handleCenter = (req, res) => {
  newsapi.v2
    .everything({
      language: "en",
      source: "associated-press, the-hill, axios, bloomberg, reuters",
    })
    .then((data) => res.json({ center: data.articles, leaning: "center" }));
};

//-------------------handle search-------------------//

const handleSearch = (req, res) => {
  newsapi.v2
    .everything({
      sources:
        "associated-press, the-hill, axios, bloomberg, reuters, al-jazeera-english, abc-news, buzzfeed, cbs-news, cnbc, cnn, entertainment-weekly, google-news, mashable, msnbc, NBC News, Newsweek, new-york-magazine, politico, the-huffington-post, the-washington-post, time, wired, breitbart-news, business-insider, fox-news, the-american-conservative, the-wall-street-journal, the-washington-times, fortune, National Review",
      language: "en",
      pageSize: 100,
    })
    .then((data) => res.json({ articles: data.articles }));
};

//----------------grabbing titles-------------//
const handleTitles = async (req, res) => {
  const client = new MongoClient("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    const db = await client.db("monocleDb");
    newsapi.v2
      .everything({
        sources:
          "associated-press, the-hill, axios, bloomberg, reuters, al-jazeera-english, abc-news, buzzfeed, cbs-news, cnbc, cnn, entertainment-weekly, google-news, mashable, msnbc, NBC News, Newsweek, new-york-magazine, politico, the-huffington-post, the-washington-post, time, wired, breitbart-news, business-insider, fox-news, the-american-conservative, the-wall-street-journal, the-washington-times, fortune, National Review",
        language: "en",
        pageSize: 100,
      })
      .then(async (data) => {
        let titleArray = data.articles.map((article) => {
          return { title: article.title.split(" ").join("-") };
        });
        await db.collection("articleTitles").insertMany(titleArray);
        res.json(titleArray);
      });
  } catch (err) {
    console.log(err);
  }
};

//-------------handleArticlePage-----------------------//

const getMyArticle = (req, res) => {
  const { title } = req.params;
  let refreshedTitle = title.split("-").join(" ").toLowerCase();
  newsapi.v2
    .everything({
      q: refreshedTitle,
      qInTitle: refreshedTitle,
      language: "en",
    })
    .then((data) => res.json({ article: data.articles }));
};

//-------------Category Endpoint--------------------//

const testGeneral = (req, res) => {
  newsapi.v2
    .topHeadlines({
      category: "general",
      country: "us",
      language: "en",
    })
    .then((data) => res.json({ data }));
};
const handleCategories = (req, res) => {
  const { category } = req.params;
  newsapi.v2
    .topHeadlines({
      category: category,
      language: "en",
      country: "us",
      pageSize: 20,
    })
    .then((data) => res.json(data));
};

module.exports = {
  handleSearch,
  topHeadlines,
  handleRightWing,
  handleLeftWing,
  handleCenter,
  handleCategories,
  handleTitles,
  getMyArticle,
  testGeneral,
};
