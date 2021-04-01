exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('education').del()
    .then(function () {
      // Inserts seed entries
      return knex('education').insert([
        { id: 1, userId: 1, profileName: 'KateProfile1', provider: 'EDA Kate1', qualification: 'FrontEnd', year: '2020' },
        { id: 2, userId: 1, profileName: 'KateProfile2', provider: 'EDA Kate2', qualification: 'BackEnd', year: '2020' },
        { id: 3, userId: 2, profileName: 'SarahProfile1', provider: 'EDA Sarah1', qualification: 'FrontEnd', year: '2020' },
        { id: 4, userId: 2, profileName: 'SarahProfile2', provider: 'EDA Sarah2', qualification: 'BackEnd', year: '2020' },
        { id: 5, userId: 3, profileName: 'AndrewProfile1', provider: 'EDA Andrew1', qualification: 'FullStack', year: '2020' }
      ])
    })
}
