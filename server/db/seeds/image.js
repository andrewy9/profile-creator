
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('image').del()
    .then(function () {
      // Inserts seed entries
      return knex('image').insert([
        { id: 1, name: 'rowValue1', img: 'text' },
        { id: 2, name: 'rowValue2', img: 'text' },
        { id: 3, name: 'rowValue3', img: 'text' }
      ]);
    });
};
