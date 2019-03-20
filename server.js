// library imports
const express = require('express');

// router imports
const postsRoutes = require('./posts/postsRoutes.js');
const usersRoutes = require('./users/usersRoutes.js');

const server = express();

// middleware
server.use(express.json());

// routing
server.use('/api/posts', postsRoutes);
server.use('/api/users', usersRoutes);

module.exports = server;
