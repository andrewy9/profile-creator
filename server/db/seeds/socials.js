
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('socials').del()
    .then(function () {
      // Inserts seed entries
      return knex('socials').insert([
        { id: 1, userId: 1, profileName: 'KateProfile1', network: 'GitHub', link: 'https://github.com/kate-baya' },
        { id: 2, userId: 1, profileName: 'KateProfile1', network: 'Youtube', link: 'https://www.youtube.com/watch?v=oHg5SJYRHA0' },
        { id: 3, userId: 2, profileName: 'SarahProfile1', network: 'GitHub', link: 'https://github.com/sarah-knowles' },
        { id: 4, userId: 2, profileName: 'SarahProfile1', network: 'Youtube', link: 'https://www.youtube.com/watch?v=o3pq8641UVs' },
        { id: 5, userId: 3, profileName: 'AndrewProfile1', network: 'GitHub', link: 'https://github.com/andrewy9' }
      ]);
    });
};
