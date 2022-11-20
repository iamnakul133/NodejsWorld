//streams
//1. writeable - wirte data sequentially
//2. readable - read data sequentially
//3. duplex - both read and write
//4. transform - data can be modified while reading and writing

//refer fs sync
const { writeFileSync } = require("fs");

for (let i = 0; i < 10000; i++) {
  writeFileSync("./content/big.txt", `hello world ${i}\n`, { flag: "a" });
}
