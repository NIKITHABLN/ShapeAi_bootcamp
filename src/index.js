const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  var age = Number(req.body.n1) / 15;
  res.send("TYour age in Dog years is : " + age + "Dog years");
});

app.listen(port);
