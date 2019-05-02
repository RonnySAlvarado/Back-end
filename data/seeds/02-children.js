
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('children').del()
    .then(function () {
      // Inserts seed entries
      return knex('children').insert([
        {
          name: "Bob Jr.",
          parentId: 1,
          gigapetName: "Generic Panda"
        }
        
      ]);
    });
};
