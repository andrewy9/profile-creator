
exports.up = function (knex) {
  return knex.schema.createTable('education', table => {
    table.increments('id')
    table.string('provider')
    table.string('qualification')
    table.string('year')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('education')

};