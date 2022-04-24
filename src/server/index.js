const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");
const setupSocket = require("./socket");

const app = express();
app.use(helmet());
app.use(compression());
const server = http.createServer(app);

// Setup socket server
const io = socketIo(server, {
  cookie: false,
});

app.use(express.static("dist"));
app.get("*", (req, res) => res.sendFile(path.resolve("dist", "index.html")));

setupSocket(io);

server.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
