
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('old_employment_history').del()
    .then(function () {
      // Inserts seed entries
      return knex('old_employment_history').insert([
        { id: 2, oldEmployer: 'your mum', oldEmploymentDate: '18.02.21', oldRole: 'cool mum-person' },
        { id: 1, oldEmployer: 'no one', oldEmploymentDate: '19.02.21', oldRole: 'broke female canine' },
        { id: 3, oldEmployer: 'dogs', oldEmploymentDate: '17.02.21', oldRole: 'dog trainer' },
      ]);
    });
};
