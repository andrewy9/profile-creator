
exports.up = function (knex) {
  return knex.schema.createTable('employment_history', table => {
    table.increments('id')
    table.string('employer')
    table.string('employmentDate')
    table.string('role')
    table.string('details')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('employment_history')

};