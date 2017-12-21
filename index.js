const express = require("express");

const app = express();

//route hander
// index route
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

//listen to PORT, for Heroku will be process.env.PORT, for local env, 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
