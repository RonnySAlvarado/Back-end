const db = require('../data/dbConfig.js');

module.exports = {
  getAll, 
  insert,
  removeEntry,
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
  // return db('foodEntries').where({childId});
  return db('foodEntries').where({childId}).join('foods', 'foodEntries.foodId', '=', 'foods.id')
  .join('categories', 'foods.id', '=', 'categories.id')
  .select('foodEntries.id as foodEntryId','foodEntries.date as entryDate', 'foodEntries.childId', 'categories.id as categoryId', 'categories.name as categoryName',  'foods.id as foodId', 'foods.name as foodName', 'foods.value as foodValue');
}

async function insert(foodEntry) {
  return db('foodEntries')
    .returning('id')
    .insert(foodEntry);
}

async function editEntry(id, editedEntry) {
    await db('foodEntries').where({ id }).update(editedEntry);
    return db('foodEntries').where({ id }).first();
}

function removeEntry(id) {
  return db('foodEntries').where('id', id).del();
}