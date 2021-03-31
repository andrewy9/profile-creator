exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('details').del()
    .then(function () {
      // Inserts seed entries
      return knex('details').insert([
        { id: 1, userId: 1, profileName: 'KateProfile1', name: 'Kate', phone: '111', email: 'kate@gmail.com', profileIntro: 'Kates first profile' },
        { id: 2, userId: 1, profileName: 'KateProfile2', name: 'Kate', phone: '222', email: 'kate@yahoo.com', profileIntro: 'Kates second profile' },
        { id: 3, userId: 2, profileName: 'SarahProfile1', name: 'Sarah', phone: '111', email: 'sarah@gmail.com', profileIntro: 'Sarahs first profile' },
        { id: 4, userId: 2, profileName: 'SarahProfile2', name: 'Sarah', phone: '222', email: 'sarah@yahoo.com', profileIntro: 'Sarahs second profile' },
        { id: 5, userId: 3, profileName: 'AndrewProfile1', name: 'Andrew', phone: '111', email: 'andrew@gmail.com', profileIntro: 'Ansrews first profile' }
      ])
    })
}
