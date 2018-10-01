var router = require('express').Router();

var { userExists, createUser } = require('../db/users');
var token = require('../auth/token');

router.post('/register', register, token.issue);

function register(req, res, next) {
  const { iwi_name, email, password, location, contact_name, phone  } = req.body;

  userExists(email, req.app.get('db'))
    .then(exists => {
      if (exists) return res.status(400).send({ message: 'User Name Taken' });
      createUser(
        iwi_name,
        email,
        password,
        location,
        contact_name,
        phone,
        req.app.get('db')
      )
        .then(() => next())
        .catch(err => res.status(500).send({ message: 'Server Error' }));
    })
    .catch(err => res.status(500).send({ message: 'Server Error' }));
}


router.post('/login', token.issue);

module.exports = router;