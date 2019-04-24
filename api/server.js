const express = require('express');

const parents = require('../parents/parentsModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({
    api: 'up and running'
  });
});

server.get('/parents', async (req, res) => {
  try {
    const allParents = await parents.getAll();
    res.status(200).json(allParents);
  } catch (error) {
    res.status(500).json({error: error});
  }
});

module.exports = server;