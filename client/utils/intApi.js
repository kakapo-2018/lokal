import request from 'superagent'

export function getIwis () {
  return request.get('/api/iwi')
    .then(res => {
      const iwis = res.body
      return iwis
    })
    .catch(() => {
      throw Error('Your API route is broken, dumbass!')
    })
}

export function addPost (post) {
  // convert the large paragraphs string into an array of paragraphs
  post.paragraphs = post.paragraphs.split('\n')
  return request.post('/v1/posts')
    .send(post)
    .then(res => {
      const returnedPost = res.body
      return returnedPost
    })
}

export function updatePost (post) {
  // convert the large paragraphs string into an array of paragraphs
  post.paragraphs = post.paragraphs.split('\n')
  return request.put(`/v1/posts/${post.id}`)
    .send(post)
    .then(res => {
      const returnedPost = res.body
      return returnedPost
    })
}

export function deletePost (postId) {
  return request.del(`/v1/posts/${postId}`)
    .then(res => {
      const returnedPost = res.body
      return returnedPost
    })
}

export function getCommentsByPostId (postId) {
  return request.get(`/v1/posts/${postId}/comments`)
    .then(res => {
      const returnedComments = res.body
      return returnedComments
    })
}

export function addCommentByPostId (postId, comment) {
  return request.post(`/v1/posts/${postId}/comments`)
    .send(comment)
    .then(res => {
      const returnedComment = res.body
      return returnedComment
    })
}

export function updateComment (comment) {
  return request.put(`/v1/comments/${comment.id}`)
    .send(comment)
    .then(res => {
      const returnedComment = res.body
      return returnedComment
    })
}

export function deleteComment (commentId) {
  return request.del(`/v1/comments/${commentId}`)
    .then(res => {
      const returnedComment = res.body
      return returnedComment
    })
}

