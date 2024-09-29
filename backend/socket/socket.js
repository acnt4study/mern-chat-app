import { Server } from 'socket.io';
import http from 'node:http';
import express from 'express';

const app = express();

const server = http.createServer(app);

const socketUsers = {};

export const getRSocketId = (rId) => {
  return socketUsers[rId];
};

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('a user connected with ', socket.id);

  const userId = socket.handshake.query.userId;
  if (userId !== 'undefined') {
    socketUsers[userId] = socket.id;
  }

  io.emit('online', Object.keys(socketUsers));

  socket.on('disconnect', () => {
    console.log('a user disconnected with ', socket.id);
    delete socketUsers[userId];
    io.emit('online', Object.keys(socketUsers));
  });
});

export { app, server, io };
