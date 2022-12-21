const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
require("dotenv").config();
const Codeblock = require("./db/codeblockSchema.js");
const ACTIONS = require("../client/src/Actions");
const path = require("path");
const codeblockRoutes = require("./routes/codeblock_routes.js");

// app config
const app = express();
const PORT = process.env.PORT || 8080;
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Socket connected", socketId);
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// middleware
app.use(express.json());
app.use(cors());

//DB config
mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (err) {
    console.log(err);
  }
};

connectDB();

mongoose.connection.once("open", () => {
  console.log("MongoDB database connected");
  app.use("/api/codeblocks", codeblockRoutes);
});

// not sure if the block below will work
mongoose.connection.on("error", (err) => {
  console.log(err);
});
/////

app.get("/", (req, res) => {
  res.status(200).send("Healthy");
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
