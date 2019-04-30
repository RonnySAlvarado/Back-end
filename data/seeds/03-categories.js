
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, name: 'fruit'},
        {id: 2, name: 'vegetable'},
        {id: 3, name: 'whole grains'},
        {id: 4, name: 'meat'},
        {id: 5, name: 'dairy'},
        {id: 6, name: 'fats and oils'},
        {id: 7, name: 'treats'}
      ]);
    });
};