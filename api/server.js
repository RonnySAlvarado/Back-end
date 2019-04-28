const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const authRouter = require('../auth/authRouter');
const parentsRouter = require('../parents/parentsRouter');
const childrenRouter = require('../children/childrenRouter');
const foodsRouter = require('../foods/foodsRouter');

server.use(express.json());

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/', authRouter);
server.use('/api/parents', parentsRouter);
server.use('/api/parents/children', childrenRouter);
server.use('/api/foods', foodsRouter);

server.get('/', async (req, res) => {
  res.status(200).json({
    api: 'up and running'
  });
});

module.exports = server;