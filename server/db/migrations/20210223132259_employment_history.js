
exports.up = function (knex) {
  return knex.schema.createTable('employment_history', table => {
    table.increments('id')
    table.integer('user_id')
    .references('user.id')
    .index()
    .onDelete("CASCADE")
    table.string('profile_name')
    table.string('employer')
    table.string('employmentDate')
    table.string('role')
    table.string('details')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('employment_history')

};

// exports.up = function (knex) {
//   return knex.schema.createTable('Comments', table => {
//     table.increments('id').primary()
//     table.integer('savedPlaces_id')
      // .references('savedPlaces.id')
      // .index()
      // .onDelete("CASCADE")
//     table.date('date_posted')
//     table.string('comment')
//   })
// };
