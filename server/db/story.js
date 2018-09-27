const db = require('./connection');


function getIwiStoriesByIwi(iwi_id) {
  return db('story')
    .where('story.iwi_id', iwi_id)
    .catch(err => {});
}

// function getUsers() {
//   return db('users').select();
// }

module.exports = {
  getIwiStoriesByIwi,
};