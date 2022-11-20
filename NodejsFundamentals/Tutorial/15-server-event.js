const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Welcome to home paage");
//   }
//   if (req.url === "/about") {
//     res.write("Welcome to about page");
//     res.end();
//   }
// });

//using event emitter api
const server = http.createServer();

// emits requests event
//subcribe to it/listen for it / respond to it

server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
