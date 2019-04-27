
exports.up = function(knex, Promise) {
  return knex.schema.createTable('parents', tbl => {
    tbl.increments('id');
    tbl.string('username', 255)
      .unique()
      .notNullable();
    tbl.string('password', 255)
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('parents');
};
