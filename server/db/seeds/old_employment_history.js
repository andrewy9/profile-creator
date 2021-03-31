exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('old_employment_history').del()
    .then(function () {
      // Inserts seed entries
      return knex('old_employment_history').insert([
        { id: 1, userId: 1, profileName: 'KateProfile1', oldEmployer: 'EDA Kate1', oldEmploymentDate: '1999', oldRole: 'Front End Dev' },
        { id: 2, userId: 2, profileName: 'SarahProfile1', oldEmployer: 'EDA Sarah1', oldEmploymentDate: '2001', oldRole: 'Dictator' },
        { id: 3, userId: 2, profileName: 'SarahProfile2', oldEmployer: 'EDA Sarah2', oldEmploymentDate: '2002', oldRole: 'Gangster' },
        { id: 4, userId: 3, profileName: 'AndrewProfile1', oldEmployer: 'United State of Neverland', oldEmploymentDate: '1999', oldRole: 'Vice President of USN' },
        { id: 5, userId: 1, profileName: 'KateProfile2', oldEmployer: 'EDA Kate2', oldEmploymentDate: '2000', oldRole: 'Back End Dev' },
      ])
    })
}
