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

export const getIwiStories = (story) => {
  return {
    type: "IWI_STORIES",
    story: story 
  }
}

export function getStories(id) {
  
  return (dispatch) => {
    return request
      .get(`/api/story/iwi/${id}`)
      .then(res => {
        console.log(res.body)
        dispatch(getIwiStories(res.body))
      })
      .catch(() => {
        throw Error('Your API route is broke, dumbass!')
      })
  }
}

export const getIwiInfo = (info) => {
  console.log(info)
  return {
    type: "IWI_INFO",
    info: info 
  }
}

export function getInfo() {
  return (dispatch) => {
    return request
      .get('/api/iwiInfo/1')
      .then(res => {
        dispatch(getIwiInfo(res.body))
      })
      .catch(() => {
        throw Error('Your API route is broke, dumbass!')
      })
  }
}