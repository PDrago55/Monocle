"use strict";
//------------MongoClient DB Set Up-----------//

const { MongoClient } = require("mongodb");

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = 4000;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("./keys");
//------------Handlers and other Functions------//

const {
  handleSearch,
  topHeadlines,
  handleRightWing,
  handleLeftWing,
  handleCenter,
  testGeneral,
  handleCategories,
  handleTitles,
  getMyArticle,
} = require("./handlers");
//-----------Sign In Validation----------------//
const User = require("./models/User");
const validateRegistration = require("./validation/register");
const validateLogin = require("./validation/login");
express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })

  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  //-------------------------EndPoints Below------------------///
  .get("/headlines", topHeadlines)
  .get("/article", handleSearch)
  .get("/right-wing", handleRightWing)
  .get("/left-wing", handleLeftWing)
  .get("/center", handleCenter)
  .get("/category/:category", handleCategories)
  .get("/tits", testGeneral)
  .get("/titles", handleTitles)
  .get("/articles/:title", getMyArticle)

  //--------------------User Endpoints-------------------//
  .post("/register", async (req, res) => {
    console.log(req.body);
    const client = new MongoClient("mongodb://localhost:27017", {
      useUnifiedTopology: true,
    });
    try {
      await client.connect();
      const db = await client.db("monocleDb");
      const { errors, isValid } = validateRegistration(req.body);
      if (!isValid) {
        return res.status(200).json(errors);
      }
      let newUser = [];
      console.log(req.body);
      await db
        .collection("userRegister")
        .findOne({ email: req.body.email })
        .then((user) => {
          if (user) {
            res.status(400).json({ error: "Email Already Exists" });
          } else {
            newUser = new User({
              name: req.body.name,
              email: req.body.email,
              password: req.body.password,
              password2: req.body.password2,
              politicalLeaning: req.body.politicalLeaning,
            });
            db.collection("userRegister").insertOne(newUser);
            res.status(200).json(newUser);
          }
          // bcrypt.genSalt(10, async (err, salt) => {
          //   await bcrypt.hash(newUser.password, salt, (err, hash) => {
          //     if (err) {
          //       throw err;
          //     }
          //     newUser.password = hash;
          //     newUser
          //       .save()
          //       .then((user) => res.json(user))
          //       .catch((err) => console.log(err));
          //   });
          // });
        });
    } catch (err) {
      console.log(err);
    }
  })

  .post("/user", async (req, res) => {
    const client = new MongoClient("mongodb://localhost:27017", {
      useUnifiedTopology: true,
    });
    const { errors, isValid } = validateLogin(req.body);
    try {
      await client.connect();
      const db = await client.db("monocleDb");
      if (!isValid) {
        return res.status(400).json(errors);
      }
      const email = req.body.email;
      const password = req.body.password;
      await db
        .collection("userRegister")
        .findOne({ email })
        .then((user) => {
          if (!user) {
            res.status(400).json({ user: "user not found" });
          }
          if (password === user.password) {
            const payload = {
              id: user.id,
              name: user.name,
            };
            jwt.sign(
              payload,
              keys.secretOrKey,
              {
                expiresIn: 31556926,
              },
              (err, token) => {
                res.status(200).json({
                  success: true,
                  signin: email,
                  token: "Bearer " + token,
                });
              }
            );
          } else {
            return res
              .status(400)
              .json({ passwordincorrect: "Password incorrect" });
          }
        });
    } catch (err) {
      console.log(err);
    }
  })
  //-------------LISTENING PORT BELOW------------//
  .listen(PORT, () => console.info(`We're Live From Port ${PORT}!`));
