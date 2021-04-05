exports.up = function (knex) {
  return knex.schema.createTable('image', table => {
    table.increments('id')
    table.integer('userId')
      .references('user.id')
      .index()
      .onDelete('CASCADE')
    table.string('profileName')
    table.string('name')
    table.text('image')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('image')
}
