const db = require('./connection');


function getIwiStoriesByIwi(iwi_id) {
  return db('story')
    .where('story.iwi_id', iwi_id)
}


function getIwiStoryByStoryId(id) {
  return db('story')
  .where('story.id', id)
}

function postStory(post) {
    return db('story').insert(post)
      .then(result => db('story').where({id: result[0]}))
    
   
  }


// function getUsers() {
//   return db('users').select();
// }

module.exports = {
  getIwiStoriesByIwi,
  getIwiStoryByStoryId,
  postStory
};