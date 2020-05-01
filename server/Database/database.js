const { MongoClient } = require("mongodb");
const assert = require("assert");
const fs = require("file-system");
const mainDatabase = async (req, res) => {
  const client = new MongoClient("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  });
  await client.connect();
  console.log("connected database");
  const db = await client.db("monocleDb");
  await db.collection("test").insertOne({ test: "test" });
  // await client.close();
  // console.log("closed");
};
mainDatabase();
