const db = require('../data/dbConfig.js');

module.exports = {
  getAll, 
  // insert,
  // remove,
  getById,
}

function getAll() {
  return db('parents');
}

function getById(id) {
  return db('parents').where({id});
}


// function insert(parent) {
//   const [id] = db('parents').insert(parent);
//   return db('parents').where({id}).first;
// }