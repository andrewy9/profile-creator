
exports.up = function (knex) {
  return knex.schema.createTable('old_employment_history', table => {
    table.increments('id')
    table.integer('user_id')
    .references('user.id')
    .index()
    .onDelete("CASCADE")
    table.string('oldEmployer')
    table.string('oldEmploymentDate')
    table.string('oldRole')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('old_employment_history')

};