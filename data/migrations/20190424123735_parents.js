
exports.up = function(knex, Promise) {
  return knex.schema.createTable('parents', () => {
    tbl.increments();
    tbl.string('name', 255).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.scema.dropTableIfExists('parents');
};
