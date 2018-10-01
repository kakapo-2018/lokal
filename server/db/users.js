var hash = require("../auth/hash");

const db = require("./connection");

function createUser(iwi_name, email, password, contact_name, location, phone) {
  return new Promise((resolve, reject) => {
    hash.generate(password, (err, hash) => {
      if (err) reject(err);

      return db("users")
        .insert({
          iwi_name,
          email,
          hash,
          contact_name,
          location,
          phone
        })
        .then(user_id => resolve(user_id))
        .catch(err => reject(err));
    });
  });
}
function userExists(email) {
  return db("users")
    .where("email", email)
    .first();
}

function getUserByName(email) {
  return db("users")
    .where("email", email)
    .first();
}

function getUserByID(user_id) {
  return db("users")
    .where("id", user_id)
    .first()
    .then(userInfo => {
      delete userInfo.hash;
      return userInfo;
    })
    .catch(err => {});
}

function getIwi() {
  return db("users").select();
}

module.exports = {
  createUser,
  userExists,
  getUserByName,
  getUserByID,
  getIwi
};
