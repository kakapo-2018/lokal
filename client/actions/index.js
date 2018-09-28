import request from 'superagent'

export const receiveData = (data) => {
  return {
    type: "IWI_DATA",
    data: data
  }
}

export function getIwis() {
  return (dispatch) => {
    return request
      .get('/api/iwi')
      .then(res => {
        dispatch(receiveData(res.body))
      })
      .catch(() => {
        throw Error('Your API route is broke, dumbass!')
      })
  }
}

export const iwiStories = (story) => {
  return {
    type: "IWI_STORIES",
    iwi_stories: story 
  }
}

export function getStories() {
  const iwi_id = req.params.id;
  return (dispatch) => {
    return request
      .get('/api/story/iwi/1')
      .then(res => {
        dispatch(iwiStories(res.body))
      })
      .catch(() => {
        throw Error('Your API route is broke, dumbass!')
      })
  }
}