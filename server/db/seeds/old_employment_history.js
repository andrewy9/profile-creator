exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('old_employment_history').del()
    .then(function () {
      // Inserts seed entries
      return knex('old_employment_history').insert([
        { id: 1, userId: 1, profileName: 'KateProfile1', oldEmployer: 'EDA Kate1', oldEmploymentDateStart: '2017-07', oldEmploymentDateEnd: '2019-07', oldRole: 'Front End Dev' },
        { id: 2, userId: 2, profileName: 'SarahProfile1', oldEmployer: 'EDA Sarah1', oldEmploymentDateStart:'2016-07', oldEmploymentDateEnd: '2020-07', oldRole: 'Dictator' },
        { id: 3, userId: 2, profileName: 'SarahProfile2', oldEmployer: 'EDA Sarah2', oldEmploymentDateStart:'2015-07', oldEmploymentDateEnd: '2021-07', oldRole: 'Gangster' },
        { id: 4, userId: 3, profileName: 'AndrewProfile1', oldEmployer: 'United State of Neverland', oldEmploymentDateStart:'2013-07', oldEmploymentDateEnd: '2018-07', oldRole: 'Vice President of USN' },
        { id: 5, userId: 1, profileName: 'KateProfile2', oldEmployer: 'EDA Kate2', oldEmploymentDateStart: '2014-07', oldEmploymentDateEnd: '2022-07', oldRole: 'Back End Dev' },
      ])
    })
}
