
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('education').del()
    .then(function () {
      // Inserts seed entries
      return knex('education').insert([
        { id: 1, user_id: 1, profile_name: 'profile1', provider: 'provider1', qualification: 'qualification1', year: '2015' },
        { id: 2, user_id: 1, profile_name: 'profile1', provider: 'provider2', qualification: 'qualification2', year: '2018' },
        { id: 3, user_id: 2, profile_name: 'profile2', provider: 'provider3', qualification: 'qualification3', year: '2021' }
      ]);
    });
};
