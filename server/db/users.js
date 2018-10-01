var hash = require('../auth/hash');

const db = require('./connection');

function createUser(email, password) {
  return new Promise((resolve, reject) => {
    hash.generate(password, (err, hash) => {
      if (err) reject(err);

      db('users')
        .insert({ email, hash })
        .then(user_id => resolve(user_id))
        .catch(err => reject(err));
    });
  });
}
function userExists(email) {
  return db('users')
    .where('email', email)
    .first();
}

function getUserByName(email) {
  return db('users')
    .where('email', email)
    .first();
}

function getUserByID(user_id) {
  return db('users')
    .where('id', user_id)
    .first()
    .then(userInfo => {
      delete userInfo.hash;
      return userInfo;
    })
    .catch(err => {});
}

function getIwi() {
  return db('users').select('id','iwi_name', 'location');
}

module.exports = {
  createUser,
  userExists,
  getUserByName,
  getUserByID,
  getIwi
};