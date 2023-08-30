const query = require("../controllers");

module.exports = (app) => {
  app.use("/script", query.getQuery);
};
