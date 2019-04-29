
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 1, name: 'fruit', value: 5},
        {id: 2, name: 'vegetables', value: 5},
        {id: 3, name: 'whole grains', value: 4},
        {id: 4, name: 'meat', value: 3},
        {id: 5, name: 'dairy', value: 3},
        {id: 6, name: 'fats and oils', value: 1},
        {id: 7, name: 'treats', value: -2}
      ]);
    });
};