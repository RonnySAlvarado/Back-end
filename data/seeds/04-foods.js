
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 1, name: 'apple', value: 5, 'categoryId': 1},
        {id: 2, name: 'broccoli', value: 5, 'categoryId': 2},
        {id: 3, name: 'spaghetti', value: -4, 'categoryId': 3},
        {id: 4, name: 'chicken', value: 4, 'categoryId': 4},
        {id: 5, name: 'cheese', value: -4, 'categoryId': 5},
        {id: 6, name: 'avocado', value: 4, 'categoryId': 6},
        {id: 7, name: 'cake', value: -4, 'categoryId': 7},
      ]);
    });
};