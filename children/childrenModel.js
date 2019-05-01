const db = require('../data/dbConfig.js');

module.exports = {
  getAll, 
  insert,
  // remove,
  getById,
  getByParent,
  getFoodEntries,
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
  const [id] = await db('children').returning('id').insert(child);
  return db('children').where({id}).first();
}

function getFoodEntries(id) {
  return db('children').where({id}).join('foodEntries')
    // .join('foodEntries')
}