
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 1, name: 'apple', value: 5, 'categoryId': 1},
        {id: 2, name: 'spaghetti', value: 4, 'categoryId': 3},
        {id: 3, name: 'cake', value: -4, 'categoryId': 7},
      ]);
    });
};