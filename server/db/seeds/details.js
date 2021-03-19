
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('details').del()
    .then(function () {
      // Inserts seed entries
      return knex('details').insert([
        {id: 1, user_id: 1, profile_name: 'profile1', name: 'rowValue1', phone: '123', email: 'qwe', profile_intro: 'rty'},
        {id: 2, user_id: 1, profile_name: 'profile1', name: 'rowValue2', phone: '234', email: 'asd', profile_intro: 'fgh'},
        {id: 3, user_id: 3, profile_name: 'profile3', name: 'rowValue3', phone: '345', email: 'zxc', profile_intro: 'cvb'}
      ]);
    });
};
