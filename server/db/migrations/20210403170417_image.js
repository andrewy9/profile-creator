exports.up = function (knex) {
  return knex.schema.createTable('image', table => {
    table.increments('id')
    table.string('name')
    table.text('img')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('image')
}
