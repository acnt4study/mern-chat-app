import express from 'express';
import { configDotenv } from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'node:path';

import c2Mongo from './db/c2Mongo.js';
import authRoutes from './routes/auth.js';
import messageRoutes from './routes/message.js';
import usersRoutes from './routes/users.js';
import { app, server } from './socket/socket.js';

const PORT = process.env.PORT || 7777;

const __dirname = path.resolve();

configDotenv();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/users', usersRoutes);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

server.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
  c2Mongo();
});
