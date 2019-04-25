
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foodEntries').del()
    .then(function () {
      // Inserts seed entries
      return knex('foodEntries').insert([
        {
          id: 1, 
          created_at: Date('April 23, 2019 03:24:00'),
          childId: 1,
          foodId: 1
        },
        {
          id: 2, 
          created_at: Date('April 24, 2019 01:24:00'),
          childId: 2,
          foodId: 2
        },
        {
          id: 3, 
          created_at: Date('April 24, 2019 03:24:00'),
          childId: 3,
          foodId: 3
        },
        {
          id: 4, 
          created_at: Date('April 24, 2019 03:24:00'),
          childId: 1,
          foodId: 4
        },
        {
          id: 5, 
          created_at: Date('April 24, 2019 03:24:00'),
          childId: 2,
          foodId: 5
        },
        {
          id: 6, 
          created_at: Date('April 24, 2019 03:24:00'),
          childId: 3,
          foodId: 6
        }
      ]);
    });
};
