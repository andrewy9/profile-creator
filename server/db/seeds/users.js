
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'andrew', password: 'andrew123'},
        {id: 2, username: 'sarah', password: 'sarah123'},
        {id: 3, username: 'kate', password: 'kate123'}
      ]);
    });
};
