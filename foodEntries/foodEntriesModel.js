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
  return db('foodEntries')
    .returning('id')
    .insert(foodEntry);
}

async function editEntry(id, foodEntry) {
  // return db('foodEntries').where({id}).update(foodEntry);
  return null;
}

async function remove(id) {
  return db('foodEntries').where('id', id).del();
}