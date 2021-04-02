exports.up = function (knex) {
  return knex.schema.createTable('educations', table => {
    table.increments('id')
    table.integer('userId')
      .references('user.id')
      .index()
      .onDelete('CASCADE')
    table.string('profileName')
    table.string('provider')
    table.string('qualification')
    table.string('yearStart')
    table.string('yearEnd')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('educations')
}
