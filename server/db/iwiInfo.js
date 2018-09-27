const db = require('./connection');


function getIwiById(iwi_id) {
  return db('iwiInfo')
    .where('iwi_id', iwi_id)
    .join('users', 'iwiInfo.iwi_id', '=', 'users.id')
    .select('iwi_name', 'location', 'content', 'image')
    // .catch(err => {});
    // .first()
}
module.exports = {
 getIwiById
}