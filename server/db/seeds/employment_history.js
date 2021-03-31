exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('employment_history').del()
    .then(function () {
      // Inserts seed entries
      return knex('employment_history').insert([
        { id: 1, userId: 1, profileName: 'profile1', employer: 'no one', employmentDate: '19.02.21', role: 'broke female canine', details: 'I take care of the day to day tasks of a broke female canine' },
        { id: 2, userId: 1, profileName: 'profile1', employer: 'your mum', employmentDate: '18.02.21', role: 'cool mum-person', details: 'I take care of your mum' },
        { id: 3, userId: 2, profileName: 'profile3', employer: 'dogs', employmentDate: '17.02.21', role: 'dog trainer', details: 'I take care of the dogs' }
      ])
    })
}
