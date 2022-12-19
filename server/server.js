const express = require("express");
const app = express();
const http = require("http");
const path = require("path");

const server = http.createServer(app);
require("dotenv").config();

app.get("/", (req, res) => {});

server.listen(8080, () => {
  console.log("Listening on port 8080");
});
