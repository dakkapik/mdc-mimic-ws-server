const ip = require("./ipGet")()
const port = process.env.PORT || 5000

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

require("./socket")(io)

server.listen(port, () => {
  console.log('> listening on *: http://' + ip + ":" + port);
});