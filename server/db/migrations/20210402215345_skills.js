exports.up = function (knex) {
  return knex.schema.createTable('skills', table => {
    table.increments('id')
    table.integer('userId')
      .references('user.id')
      .index()
      .onDelete('CASCADE')
    table.string('profileName')
    table.string('skill')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('skills')
}
