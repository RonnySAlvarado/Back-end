const db = require('../data/dbConfig.js');

module.exports = {
  getAll, 
  insert,
  // remove,
  getById,
}

function getAll() {
  return db('parents');
}

function getById(id) {
  return db('parents').where({id}).first();
}

async function insert(parent) {
  // const [id] = await db('parents').insert(parent);
  // return db('parents').where({id}).first();
  // const id = await db('parents')
  // // .returning('id')
  // .insert(parent, ['id']);
  // return id[0];
  const [id] = await db('notes').insert(parent);
  return db('parents')
    .where({ id })
    .first();
}