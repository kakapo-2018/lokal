
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('story', table => {
    table.increments('id').primary
    table.integer('iwi_id')
    table.string('title')
    table.integer('latitude')
    table.integer('longitude')
    table.string('content',500)
    table.string('image',500)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('story')
};