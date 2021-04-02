exports.up = function (knex) {
  return knex.schema.createTable('socials', table => {
    table.increments('id')
    table.integer('userId')
      .references('user.id')
      .index()
      .onDelete('CASCADE')
    table.string('profileName')
    table.string('network')
    table.string('link')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('socials')
}
