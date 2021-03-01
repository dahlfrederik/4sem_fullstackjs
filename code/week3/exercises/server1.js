const { makeSecureRandomParallel } = require("./exercise1B");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Hello from the server!");
});

app.get("/api/securerandoms", (request, response) => {
  response.setHeader("Content-Type", "application/json");
  makeSecureRandomParallel().then((obj) => response.send(JSON.stringify(obj)));
});

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});
