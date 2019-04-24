
exports.up = function(knex, Promise) {
  return knex.schema.createTable('gigapets', tbl => {
    tbl.increments();
    tbl.string('name', 255)
      .notNullable();
    tbl.integer('childId')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('children')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.integer('healthValue')
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.scema.dropTableIfExists('gigapets');
};
