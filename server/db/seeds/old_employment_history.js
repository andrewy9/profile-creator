exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('old_employment_history').del()
    .then(function () {
      // Inserts seed entries
      return knex('old_employment_history').insert([
        { id: 1, userId: 1, profileName: 'profile1', oldEmployer: 'your mum', oldEmploymentDate: '18.02.21', oldRole: 'cool mum-person' },
        { id: 2, userId: 1, profileName: 'profile1', oldEmployer: 'your dad', oldEmploymentDate: '19.02.21', oldRole: 'broke female canine' },
        { id: 3, userId: 2, profileName: 'profile3', oldEmployer: 'Donnie', oldEmploymentDate: '17.02.21', oldRole: 'dog trainer' }
      ])
    })
}
