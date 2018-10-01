
exports.up = function(knex, Promise) {
  return knex.schema.table('story', function (table) {
    table.string('obj')
    table.string('objBackGroundImg')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('story', function (table) {
    table.dropColumn('obj')
    table.dropColumn('objBackGroundImg')
  })
};
