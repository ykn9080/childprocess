const express = require("express");
const cors = require("cors");
const app = express();
// parse requests of content-type - application/json
app.use(express.json());
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const port = 7878;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

require("./app/routes")(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
