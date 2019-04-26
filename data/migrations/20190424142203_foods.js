
exports.up = function(knex, Promise) {
  return knex.schema.createTable('foods', tbl => {
    tbl.increments();
    tbl.string('name', 255)
      .notNullable()
      .unique();
    tbl.integer('value')
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('foods');
};
