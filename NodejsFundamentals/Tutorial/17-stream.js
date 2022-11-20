const { createReadStream } = require("fs");

//const stream = createReadStream("./content/big.txt");

// dafault chunk 64kb
//last buffer - remainder
// highWaterMark - control size
const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});
// const stream = createReadStream('../contentbigtxt' , {encoding : 'utf8'})
stream.on("data", (chunk) => {
  console.log(chunk);
});

//err in stream
//stream.on("error", (err) => console.log("error occured"));

//to read we use event 'data'
//check nodejs docs
