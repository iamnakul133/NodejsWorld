const path = require("path");
console.log(path.sep); // platform specific separator

//join
const filepath = path.join("/content/", "subfolder", "test.txt");
console.log(filepath);

// base name
const base = path.basename(filepath);
console.log(base);

//absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
