exports.up = function (knex) {
  return knex.schema.createTable('details', table => {
    table.increments('id')
    table.integer('userId')
      .references('user.id')
      .index()
      .onDelete('CASCADE')
    table.string('profileName')
    table.string('firstName')
    table.string('lastName')
    table.string('phone')
    table.string('email')
    table.string('profileIntro')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('details')
}
