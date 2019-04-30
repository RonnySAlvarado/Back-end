
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foodEntries').del()
    .then(function () {
      // Inserts seed entries
      return knex('foodEntries').insert([
        {
          id: 1, 
          date: "2019-04-24",
          childId: 1,
          foodId: 1
        },
        {
          id: 2, 
          date: "2019-04-24",
          childId: 2,
          foodId: 2
        },
        {
          id: 3, 
          date: "2019-04-24",
          childId: 3,
          foodId: 3
        },
        {
          id: 4, 
          date: "2019-04-24",
          childId: 1,
          foodId: 3
        },
        {
          id: 5, 
          date: "2019-04-24",
          childId: 2,
          foodId: 2
        },
        {
          id: 6, 
          date: "2019-04-24",
          childId: 3,
          foodId: 1
        }
      ]);
    });
};
