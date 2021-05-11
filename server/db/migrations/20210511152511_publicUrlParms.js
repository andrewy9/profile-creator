
exports.up = function (knex) {
  return knex.schema.createTable('publicUrlParams', table => {
    table.increments('id')
    table.integer('userId')
      .references('user.id')
      .index()
      .onDelete('CASCADE')
    table.string('profileName')
    table.string('urlParams')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('publicUrlParams')
}
