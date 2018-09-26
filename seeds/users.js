
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, iwi_name: 'rowValue1'},
        {id: 2, iwi_name: 'rowValue2'},
        {id: 3, iwi_name: 'rowValue3'}
      ]);
    });
};
