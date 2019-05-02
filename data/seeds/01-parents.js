
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parents').del()
    .then(function () {
      // Inserts seed entries
      return knex('parents').insert([
        {id: 1, username: 'Bob', password: 'pass123'}
      ]);
    });
};
