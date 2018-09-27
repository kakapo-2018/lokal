const router = require("express").Router()
let { getIwiStoriesByIwi, getIwiStoryByStoryId, postStory, editStory, deleteStory } = require("../db/story");


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

router.post('/iwi/:id', (req, res) => {
  const iwi_id = req.params.id
  const { title, content, image } = req.body

  const post = {
    iwi_id,
    title,
    // convert the `paragraphs` JavaScript array into a string to be saved
    content: JSON.stringify(content),
    image
  }

  postStory(post)
    .then(addedPost => {
      // convert the saved JSON string into a JavaScript array
      //addedPost.content = JSON.parse(addedPost.content)
      console.log(addedPost)
      res.json(addedPost)
    })
})

router.put('/iwi/:id', (req, res, next) => {
  const id = req.params.id
  const { title, content, image } = req.body

  const post = {
    id: id,
    title,
    content: JSON.stringify(content),
    image
  }
  editStory(post)
    .then(editedPost => {
      // convert the saved JSON string into a JavaScript array
      //addedPost.content = JSON.parse(addedPost.content)
      res.json(editedPost)
    })
})

router.delete('/iwi/:id', (req, res, next) => {
  const id = req.params.id

  deleteStory(id)
    .then(() => {
      // convert the saved JSON string into a JavaScript array
      //addedPost.content = JSON.parse(addedPost.content)
      res.json({})
    })
})

// function doPromiseStuff () {
//   let arr = [];
//   return db('story')
//     .then(() => {
//       arr.push(getIwiStoriesByIwi())
//       arr.push(getIwiStoryByStoryId())
//       arr.push(postStory())
//       Promise.all(arr).then(stuff)
//     })
// }

module.exports = router