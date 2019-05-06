

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foodEntries').del()
    .then(function () {
      // Inserts seed entries
      return knex('foodEntries').insert([
        {
          childId: 1,
          foodId: 1,
          date: "2019-05-01"
        }
      ]);
    });
};
