const router = require("express").Router();
let { getIwi } = require("../db/users");

// ----------- Get the users of the app
router.get("/", (req, res) => {
  console.log("route");
  getIwi()
    .then(users => {
      res.json(users);
    })
    .catch(err =>
      res.status(500).send({
        message: "Server Error"
      })
    );
});

module.exports = router;
