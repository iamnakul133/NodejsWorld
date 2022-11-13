const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home paage");
  }
  if (req.url === "/about") {
    res.write("Welcome to about page");
    res.end();
  }
});

server.listen(5000);
