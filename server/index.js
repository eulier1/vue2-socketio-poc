const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server,{
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

app.get('/', (req, res) => {
  res.send('<h1>Hey warup</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chatMessage', (msg) => {
    console.log('message: ' + msg);
    io.emit('chatMessage', msg);
  });
});

server.listen(3100, () => {
  console.log('listening on *:3100');
});