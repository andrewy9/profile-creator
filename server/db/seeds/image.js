
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('image').del()
    .then(function () {
      // Inserts seed entries
      return knex('image').insert([
        { id: 1, userId: 1, profileName: 'KateProfile1', name: 'rowValue1', image: 'text' },
        { id: 2, userId: 2, profileName: 'SarahProfile1', name: 'rowValue2', image: 'text' },
        { id: 3, userId: 3, profileName: 'AndrewProfile1', name: 'rowValue3', image: 'text' }
      ]);
    });
};