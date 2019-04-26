
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 1, name: 'apple', value: 3},
        {id: 2, name: 'chicken nuggets', value: 2},
        {id: 3, name: 'chocolate bar', value: -2},
        {id: 4, name: 'french fries', value: -2},
        {id: 5, name: 'turkey', value: 3},
        {id: 6, name: 'ice cream', value: -3},
        {id: 7, name: 'carrots', value: 3}
      ]);
    });
};
