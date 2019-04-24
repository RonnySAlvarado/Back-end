const db = require('../data/dbConfig.js');

module.exports = {
  getAll, 
  // insert,
  // remove
}

function getAll() {
  return db('parents');
}