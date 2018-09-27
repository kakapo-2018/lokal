const router = require("express").Router()
let {getIwiStoriesByIwi, getIwiStoryByStoryId, postStory} = require("../db/story");


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
  const {title, content, image} = req.body

  const post = {
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