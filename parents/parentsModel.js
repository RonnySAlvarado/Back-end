const db = require('../data/dbConfig.js');

module.exports = {
  getAll, 
  insert,
  getById,
}

function getAll() {
  return db('parents');
}

function getById(id) {
  return db('parents').where({id}).first();
}

async function insert(parent) {
  return db('parents')
    .returning('id')
    .insert(parent);
}