const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req.method);

  console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" }); //mime/media type
    res.end("home page");
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-type": "text/html" }); //mime/media type
    res.end("about page");
  }
});

server.listen(5000);
