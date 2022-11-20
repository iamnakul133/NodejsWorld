const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recieved ${name} ${id}`);
});
customEmitter.on("response", () => {
  console.log(`some other`);
});

//we can create asdmany events if we want
//this is synchronous

customEmitter.emit("response", "john", 32);
