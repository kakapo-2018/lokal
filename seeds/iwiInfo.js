
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('iwiInfo').del()
    .then(function () {
      // Inserts seed entries
      return knex('iwiInfo').insert([
        {id: 1, iwi_id: 1, content: '', image: ''},
        {id: 2, iwi_id: 2, content: '', image: ''},
        {id: 3, iwi_id: 3, content: '', image: ''}
      ]);
    });
};
