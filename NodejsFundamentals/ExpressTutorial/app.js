const express = require("express");

const app = express();

app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.send(oath.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found<h1>");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
