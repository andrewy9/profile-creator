
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('publicUrlParams').del()
    .then(function () {
      // Inserts seed entries
      return knex('publicUrlParams').insert([
        { id: 1, userId: '10203053031', profileName: 'profile1', urlParams: 'publicView/10203053031/profile1' },
        { id: 2, userId: '10203053032', profileName: 'profile2', urlParams: 'publicView/10203053032/profile2' },
        { id: 3, userId: '10203053033', profileName: 'profile3', urlParams: 'publicView/10203053032/profile3' }
      ]);
    });
};
