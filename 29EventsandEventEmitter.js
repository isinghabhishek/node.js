// Events and Event Emitter in NodeJS

const express = require("express");
const EventEmitter = require("events");
const app = express();
const event = new EventEmitter();

let count = 0;

event.on("countAPT", ()=> {
    count++;
    console.log("event called", count)
});

app.get("/", (req, resp) => {
    resp.send("api called");
    event.emit("countAPI");
});
app.get("/update", (req, resp) => {
    resp.send("api called");
    event.emit("countAPI");
});
app.get("/search", (req, resp) => {
    event.emit("countAPI");
    resp.send("api called");
});
app.get("/hello", (req, resp) => {
    event.emit("countAPI");
    resp.send("api called");
});
app.listen(5000);