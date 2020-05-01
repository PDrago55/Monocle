const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
// const keys = require("./keys");
const { MongoClient } = require("mongodb");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
const test = async (passport) => {
  const client = new MongoClient("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    const db = client.db("monocleDb");
    passport.use(
      new JwtStrategy(opts, (jwt_payload, done) => {
        await db.collection("userRegister").findOne(jwt_payload.id).then((user) => {
            console.log(jwt_payload._id)
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        });
      })
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = {test};
