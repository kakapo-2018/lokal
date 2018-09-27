const router = require("express").Router()
let {getIwiStoriesByIwi} = require("../db/story");


// ----------- Get the users of the app

router.get("/:id", (req, res) => {
  getIwiStoriesByIwi(req.params.id)
   .then(story => {
    res.json(story)
  })

  .catch(err => res.status(500)
    .send({
      message: "Server Error"
    })
  )
})


module.exports = router