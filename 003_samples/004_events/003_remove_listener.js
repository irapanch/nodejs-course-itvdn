const EventEmitter = require("events");

const myEmitter = new EventEmitter();

function myListener() {
  console.log("Listener is invoked");
}
myEmitter.on("myEvent", myListener);
myEmitter.emit("myEvent", myListener);
myEmitter.removeListener("myEvent", myListener);
myEmitter.emit("myEvent");
