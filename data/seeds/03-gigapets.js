
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gigapets').del()
    .then(function () {
      // Inserts seed entries
      return knex('gigapets').insert([
        {id: 1, name: 'Monster Dan', childId: '1', healthValue: '0'},
        {id: 2, name: 'Creature George', childId: '2', healthValue: '0'},
        {id: 3, name: 'Elephant Ellen', childId: '3', healthValue: '0'}
      ]);
    });
};
