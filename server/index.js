const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server)

app.get('/', (req, res) => {
  res.send('<h1>Hey warup</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3100, () => {
  console.log('listening on *:3100');
});