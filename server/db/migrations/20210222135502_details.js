
exports.up = function(knex) {
  return knex.schema.createTable('details', table => {
    table.increments('id')
    table.integer('user_id')
    .references('user.id')
    .index()
    .onDelete("CASCADE")
    table.string('profile_name')
    table.string('name')
    table.string('phone')
    table.string('email')
    table.string('profile_intro')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('details')
};
