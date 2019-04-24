
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('children').del()
    .then(function () {
      // Inserts seed entries
      return knex('children').insert([
        {id: 1, name: 'Ludwig', parentId: '1'},
        {id: 2, name: 'Beulah', parentId: '2'},
        {id: 3, name: 'Samwell', parentId: '1'}
      ]);
    });
};
