exports.up = function (knex) {
  return knex.schema.createTable('employment_history', table => {
    table.increments('id')
    table.integer('userId')
      .references('user.id')
      .index()
      .onDelete('CASCADE')
    table.string('profileName')
    table.string('employer')
    table.string('employmentDate')
    table.string('role')
    table.string('details')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('employment_history')
}
