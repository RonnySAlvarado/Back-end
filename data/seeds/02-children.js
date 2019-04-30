
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('children').del()
    .then(function () {
      // Inserts seed entries
      return knex('children').insert([
        {id: 1, name: 'Ludwig', parentId: '1', gigapetName: 'Panda Dan'},
        {id: 2, name: 'Beulah', parentId: '1', gigapetName: 'Monster George'},
        {id: 3, name: 'Samwell', parentId: '1', gigapetName: 'Elephant Ellen'}
      ]);
    });
};
