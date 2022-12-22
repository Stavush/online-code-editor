const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
require("dotenv").config();
const ACTIONS = require("../client/src/Actions");
const codeblockRoutes = require("./routes/codeblock_routes.js");

// app config
const app = express();
const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

// attach the server to socket.io
const io = new Server(server);

// create a new connection
io.on("connection", (socket) => {
  console.log("A user connected", socket.id);
  socket.on("disconnect", () => {
    console.log("A user disconnected");
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

mongoose.connection.on("error", (err) => {
  console.log(err);
});

app.get("/", (req, res) => {
  res.status(200).send("Healthy");
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
