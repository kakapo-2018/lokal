const router = require("express").Router()
let {getIwiById} = require("../db/iwiInfo");

router.get('/:id', (req, res) => {
  getIwiById(req.params.id)
  .then(iwi => {
    res.json(iwi)
  })

  .catch(err => res.status(500)
    .send({
      err: err,
      message: "Server Error"
    })
  )
})

module.exports = router