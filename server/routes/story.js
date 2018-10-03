const router = require("express").Router()
let { getIwiStoriesByIwi, getIwiStoryByStoryId, postStory, editStory, deleteStory } = require("../db/story");



router.get("/iwi/:id", (req, res) => {
  getIwiStoriesByIwi(req.params.id)
    .then(story => {
      res.json(story)
    })
    .catch(err => res.status(500)
      .send({
        message: "Server Error"
      })
    )})

router.get("/:id", (req, res) => {
  getIwiStoryByStoryId(req.params.id)
    .then(story => {
      // story.content=JSON.parse(story.content)
      res.json(story)
    })
    .catch(err => res.status(500)
      .send({
        message: "Server Error"
      })
    )})

router.post('/:id', (req, res) => {
  const iwi_id = req.params.id
  const { title, content, image } = req.body
  const post = {
    iwi_id,
    title,
    content,
    image
  }
  postStory(post)
    .then(addedPost => {
      res.json(addedPost)
    })
})

router.put('/:id', (req, res, next) => {
  const id = req.params.id
  const { title, content, image } = req.body
  const post = {
    id: id,
    title,
    content,
    image
  }
  editStory(post)
    .then(editedPost => {
      res.json(editedPost)
    })
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  deleteStory(id)
    .then(() => {
      res.json({})
    })
})


module.exports = router