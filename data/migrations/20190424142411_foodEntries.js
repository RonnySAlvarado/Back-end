
exports.up = function(knex, Promise) {
  return knex.schema.createTable('foodEntries', tbl => {
    tbl.increments();
    tbl.timestamp('created_at')
      .defaultTo(knex.fn.now())
    tbl.integer('childId')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('children')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.integer('foodId')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('foods')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('foodEntries');
};
