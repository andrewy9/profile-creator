
exports.up = function (knex) {
  return knex.schema.createTable('old_employment_history', table => {
    table.increments('id')
    table.string('oldEmployer')
    table.string('oldEmploymentDate')
    table.string('oldRole')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('old_employment_history')

};