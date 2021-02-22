
exports.up = function(knex) {
  return knex.schema.createTable('details', table => {
    table.increments('id')
    table.string('name')
    table.string('phone')
    table.string('email')
    table.string('profile_intro')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('details')
};
