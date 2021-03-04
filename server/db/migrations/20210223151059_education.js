
exports.up = function (knex) {
  return knex.schema.createTable('education', table => {
    table.increments('id')
    table.integer('user_id')
    .references('user.id')
    .index()
    .onDelete("CASCADE")
    table.string('provider')
    table.string('qualification')
    table.string('year')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('education')

};