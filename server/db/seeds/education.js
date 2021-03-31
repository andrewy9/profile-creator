exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('education').del()
    .then(function () {
      // Inserts seed entries
      return knex('education').insert([
        { id: 1, userId: 1, profileName: 'profile1', provider: 'provider1', qualification: 'qualification1', year: '2015' },
        { id: 2, userId: 1, profileName: 'profile1', provider: 'provider2', qualification: 'qualification2', year: '2018' },
        { id: 3, userId: 2, profileName: 'profile2', provider: 'provider3', qualification: 'qualification3', year: '2021' }
      ])
    })
}
