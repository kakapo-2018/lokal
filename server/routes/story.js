const router = require("express").Router()
let {getIwiStoriesByIwi, getIwiStoryByStoryId} = require("../db/story");


// ----------- Get the users of the app

router.get("/iwi/:id", (req, res) => {
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

router.get("/:id", (req, res) => {
  getIwiStoryByStoryId(req.params.id)
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