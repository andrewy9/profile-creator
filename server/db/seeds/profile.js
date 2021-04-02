exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('profile').del()
    .then(function () {
      // Inserts seed entries
      return knex('profile').insert([
        { id: 1, userId: 1, profileName: 'KateProfile1', firstName: 'Kate', lastName: 'Katelast', phone: '111', email: 'kate@gmail.com', location: 'New Zealand', profileIntro: 'Kates first profile' },
        { id: 2, userId: 1, profileName: 'KateProfile2', firstName: 'Kate', lastName: 'Katelast', phone: '222', email: 'kate@yahoo.com', location: 'New Zealand', profileIntro: 'Kates second profile' },
        { id: 3, userId: 2, profileName: 'SarahProfile1', firstName: 'Sarah', lastName: 'Sarahlast', phone: '111', email: 'sarah@gmail.com', location: 'New Zealand', profileIntro: 'Sarahs first profile' },
        { id: 4, userId: 2, profileName: 'SarahProfile2', firstName: 'Sarah', lastName: 'Sarahlast', phone: '222', email: 'sarah@yahoo.com', location: 'New Zealand', profileIntro: 'Sarahs second profile' },
        { id: 5, userId: 3, profileName: 'AndrewProfile1', firstName: 'Andrew', lastName: 'Andrewlast', phone: '111', email: 'andrew@gmail.com', location: 'New Zealand', profileIntro: 'Ansrews first profile' }
      ])
    })
}
