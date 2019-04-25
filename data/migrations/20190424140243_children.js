
exports.up = function(knex, Promise) {
  return knex.schema.createTable('children', tbl => {
    tbl.increments();
    tbl.string('name', 255)
      .notNullable();
    tbl.integer('parentId')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('parents')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.scema.dropTableIfExists('children');
};
