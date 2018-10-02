const bcrypt = require('bcrypt')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, iwi_name: 'Te Āti Awa', location: 'Wellington', contact_name: 'Aroha', email: 'aroha@123.com', phone: 1234, hash: bcrypt.hashSync('123', 12)},
        {id: 2, iwi_name: 'Ngāti Toa', location: 'Porirua', contact_name: 'Tama', email: 'tama@123.com', phone: 1234, hash: ''},
        {id: 3, iwi_name: 'Te Arawa', location: 'Tauranga', contact_name: 'Tama', email: 'tama@123.com', phone: 1234, hash: ''},
        {id: 4, iwi_name: 'Taranaki ki Te Upoko o Te Ika', location: 'Wellington', contact_name: 'Tama', email: 'tama@123.com', phone: 1234, hash: ''}
      ]);
    });
};
