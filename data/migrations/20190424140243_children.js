
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
    tbl.string('gigapetName', 255)
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('children');
};
