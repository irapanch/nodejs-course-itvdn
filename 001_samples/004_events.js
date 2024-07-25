const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("greet", (name) => {
  console.log(`Hello ${name}!`);
});
customEmitter.on("good", (name) => {
  console.log(`Hello ${name}!`);
});
customEmitter.emit("greet", "Ira");
customEmitter.emit("good", "Roma");
