
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('iwiInfo', table => {
    table.increments('id').primary
    table.integer('iwi_id')
    table.string('content', 500)
    table.string('image', 500)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('iwiInfo')
};
