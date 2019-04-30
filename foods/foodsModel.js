const db = require('../data/dbConfig.js');

module.exports = {
  getAll, 
  insert,
  remove,
  getById,
}

function getAll() {
  return db('foods');
}

function getById(id) {
  return db('foods').where({id});
}

async function insert(food) {
  return db('foods')
    .returning('id')
    .insert(food);
}

async function remove(id) {
  return db('foods').where('id', id).del();
}