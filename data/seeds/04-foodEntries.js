
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foodEntries').del()
    .then(function () {
      // Inserts seed entries
      return knex('foodEntries').insert([
        {
          id: 1, 
          date: "4-24-2019",
          childId: 1,
          foodId: 1
        },
        {
          id: 2, 
          date: "4-24-2019",
          childId: 2,
          foodId: 2
        },
        {
          id: 3, 
          date: "4-24-2019",
          childId: 3,
          foodId: 3
        },
        {
          id: 4, 
          date: "4-24-2019",
          childId: 1,
          foodId: 4
        },
        {
          id: 5, 
          date: "4-24-2019",
          childId: 2,
          foodId: 5
        },
        {
          id: 6, 
          date: "4-24-2019",
          childId: 3,
          foodId: 6
        }
      ]);
    });
};
