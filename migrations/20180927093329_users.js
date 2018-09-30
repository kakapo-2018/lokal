
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', table => {
    table.increments('id').primary
    table.string('iwi_name')
    table.string('location')
    table.string('contact_name')
    table.string('email')
    table.integer('phone')
    table.string('hash')
    table.string('obj')
    table.string('objBackGroundImg')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
