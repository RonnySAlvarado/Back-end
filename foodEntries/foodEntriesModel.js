const db = require('../data/dbConfig.js');

module.exports = {
  getAll, 
  insert,
  remove,
  getById,
  getByChild,
  editEntry,
}

function getAll() {
  return db('foodEntries');
}

function getById(id) {
  return db('foodEntries').where({id});
}

function getByChild(childId) {
  return db('foodEntries').where({childId});
}

async function insert(foodEntry) {
  const [id] = await db('foodEntries').insert(foodEntry);
  return db('foodEntries').where({id}).first();
}

async function editEntry(id, foodEntry) {
  return db('foodEntries').where({id}).update(foodEntry);
}

async function remove(id) {
  return db('foodEntries').where('id', id).del();
}