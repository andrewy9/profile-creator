exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('details').del()
    .then(function () {
      // Inserts seed entries
      return knex('details').insert([
        { id: 1, userId: 1, profileName: 'profile1', name: 'rowValue1', phone: '123', email: 'qwe', profileIntro: 'rty' },
        { id: 2, userId: 1, profileName: 'profile2', name: 'rowValue2', phone: '234', email: 'asd', profileIntro: 'fgh' },
        { id: 3, userId: 3, profileName: 'profile3', name: 'rowValue3', phone: '345', email: 'zxc', profileIntro: 'cvb' }
      ])
    })
}
