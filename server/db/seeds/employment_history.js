exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('employment_history').del()
    .then(function () {
      // Inserts seed entries
      return knex('employment_history').insert([
        { id: 1, userId: 1, profileName: 'KateProfile1', employer: 'EDA Kate1', employmentDate: '2020', role: 'FullStack Developer1', details: 'Worked very hard,wrote great codes and amazing tests1' },
        { id: 2, userId: 1, profileName: 'KateProfile2', employer: 'EDA Kate2', employmentDate: '2023', role: 'FullStack Developer2', details: 'Worked very hard,wrote great codes and amazing tests2' },
        { id: 3, userId: 2, profileName: 'SarahProfile1', employer: 'EDA Sarah1', employmentDate: '2019', role: 'FrontEnd Developer', details: 'Worked very hard,wrote great codes and amazing tests3' },
        { id: 4, userId: 2, profileName: 'SarahProfile2', employer: 'EDA Sarah2', employmentDate: '2021', role: 'Senior FrontEnd Developer', details: 'Worked very hard,wrote great codes and amazing tests4' },
        { id: 5, userId: 3, profileName: 'AndrewProfile1', employer: 'Google', employmentDate: '2022', role: 'Office coffee boy', details: 'Worked very hard,wrote great coffees and amazing teas' }
      ])
    })
}
