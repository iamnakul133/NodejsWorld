//Modules- Encapsulated Code (only share minimum)
//CommonJs,every file is module(by default)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

require("./7-mind-grenade");

console.log(data);
sayHi("susan");
sayHi(names.john);
sayHi(data.SinglePerson.name);