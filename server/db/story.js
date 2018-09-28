const db = require('./connection');


function getIwiStoriesByIwi(iwi_id) {
  return db('story')
    .where('story.iwi_id', iwi_id)
}


function getIwiStoryByStoryId(id) {
  return db('story')
    .where('story.id', id)
    .select('title', 'content', 'image')
}

function postStory(post) {
  return db('story').insert(post)
    .then(result => db('story').where({ id: result[0] }))
}

function editStory(post) {
  return db('story').update(post).where('story.id', post.id)
}

function deleteStory(id) {
  return db('story').delete().where('story.id', id)
}


module.exports = {
  getIwiStoriesByIwi,
  getIwiStoryByStoryId,
  postStory,
  editStory,
  deleteStory
};