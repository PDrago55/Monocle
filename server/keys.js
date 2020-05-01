const { database } = require("./Database/database");

module.exports = {
  mongoDb: database,
  secretOrKey: "secret",
};
