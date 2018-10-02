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
        dispatch(getIwiStories(res.body))
      })
      .catch(() => {
        throw Error('Your API route is broke, dumbass!')
      })
  }
}

export const getIwiInfo = (info) => {
  return {
    type: "IWI_INFO",
    info: info 
  }
}

export function getInfo(id) {
  return (dispatch) => {
    
    return request
      .get(`/api/iwiInfo/${id}`)
      .then(res => {
        
        dispatch(getIwiInfo(res.body))
      })
      .catch(() => {
        throw Error('Your API route is broke, dumbass!')
      })
  }
}

export const getIwiStory = (story) => {
  return {
    type: "IWI_STORY",
    story: story 
  }
}

export function getStory(id) {
  
  return (dispatch) => {
    return request
      .get(`/api/story/${id}`)
      .then(res => {
        console.log(res.body)
        dispatch(getIwiStory(res.body))
      })
      .catch(() => {
        throw Error('Your API route is broke, dumbass!')
      })
  }
}

export function clearState() {
  return {
    type: "RESET"
  }
}

export const displayModal = () => ({
  type: 'MODAL_ON'
})

export const hideModal = () => ({
  type: 'MODAL_OFF'
})