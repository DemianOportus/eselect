const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.post("/api/newUser", (req, res) => {
  let data = req.body;
  console.log(data);
});

app.listen(port, () => {
  console.log("server has started");
});
