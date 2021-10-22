const express = require("express");
const app = express();
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};


app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Service healthy" }));
});

app.listen(4040, () => console.log("Listening on port 4040"));
