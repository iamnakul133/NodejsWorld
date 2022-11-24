const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("about Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1> resource not found <h1>");
});

app.listen(3000, () => {
  console.log("server is listening to port 3000");
});
//app.get()
//app.post()
//app.put
//app.delete
//app.all
