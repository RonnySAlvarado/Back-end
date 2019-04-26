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
  const [id] = await db('foods').insert(food);
  return db('foods').where({id}).first();
}

async function remove(id) {
  return db('foods').where('id', id).del();
}