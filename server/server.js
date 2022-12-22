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

// connect the server to socket.io
const io = new Server(server);

const userSocketMap = {};

const getAllSessionUsers = (sessionId) => {
  return ([...io.sockets.adapter.rooms.get(sessionId)] || []).map(
    (socketId) => {
      return {
        socketId,
        username: userSocketMap[socketId],
      };
    }
  );
};

// create a new connection
io.on("connection", (socket) => {
  console.log("A user connected", socket.id);
  // A user joins the session
  socket.on(ACTIONS.JOIN, ({ sessionId, username }) => {
    userSocketMap[socket.id] = username;
    console.log(userSocketMap);
    socket.join(sessionId);
    const users = getAllSessionUsers(sessionId);
    users.forEach(({ socketId }) => {
      io.to(socketId).emit(ACTIONS.JOINED, {
        users,
        username,
        socketId: socket.id,
      });
    });
  });

  // A user changes the code
  socket.on(ACTIONS.CODE_CHANGE, ({ sessionId, code }) => {
    socket.in(sessionId).emit(ACTIONS.CODE_CHANGE, { code });
  });

  socket.on(ACTIONS.SYNC_CODE, ({ sessionId, code }) => {
    io.to(sessionId).emit(ACTIONS.CODE_CHANGE, { code });
  });

  socket.on("disconnect", () => {
    const rooms = [...socket.rooms];
    rooms.forEach((sessionId) => {
      socket.in(sessionId).emit(ACTIONS.DISCONNECTED, {
        username: userSocketMap[socket.id],
        socketId: socket.id,
      });
    });
    delete userSocketMap[socket.id];
    socket.leave();
  });
});

//

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
  app.use("/codeblocks", codeblockRoutes);
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
