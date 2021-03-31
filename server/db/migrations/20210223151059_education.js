exports.up = function (knex) {
  return knex.schema.createTable('education', table => {
    table.increments('id')
    table.integer('userId')
      .references('user.id')
      .index()
      .onDelete('CASCADE')
    table.string('profileName')
    table.string('provider')
    table.string('qualification')
    table.string('year')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('education')
}
