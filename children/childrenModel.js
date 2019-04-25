const db = require('../data/dbConfig.js');

module.exports = {
  getAll, 
  insert,
  // remove,
  getById,
  getByParent,
}

function getAll() {
  return db('children');
}

function getById(id) {
  return db('children').where({id});
}

function getByParent(parentId) {
  return db('children').where({parentId})
}

async function insert(child) {
  const [id] = await db('children').insert(child);
  return db('children').where({id}).first();
}