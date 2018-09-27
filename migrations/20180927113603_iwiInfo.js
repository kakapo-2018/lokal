
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('iwiInfo', table => {
    table.increments('id').primary
    table.integer('iwi_id')
    table.string('content', 1000)
    table.string('image', 1000)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('iwiInfo')
};
