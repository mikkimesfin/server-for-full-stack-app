
exports.up = function(knex, Promise) {
  return knex.schema.createTable('inventory', (table) => {
  table.increments()
  table.text('brand')
  table.text('type').notNullable()
  table.integer('price')
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('inventory')
};
