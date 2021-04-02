
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        { id: 1, userId: 1, profileName: 'KateProfile1', skill: 'Programming' },
        { id: 2, userId: 1, profileName: 'KateProfile2', skill: 'NodeJS' },
        { id: 3, userId: 2, profileName: 'SarahProfile1', skill: 'Developming' },
        { id: 4, userId: 2, profileName: 'SarahProfile2', skill: 'ReactJS' },
        { id: 5, userId: 3, profileName: 'AndrewProfile1', skill: 'Noding while reacting' }
      ]);
    });
};
