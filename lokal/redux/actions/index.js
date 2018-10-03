const baseURL = 'http://lokalstories.herokuapp.com/api'
import request from 'superagent'

export const receiveData = data => {
    return {
      type: "IWI_DATA",
      data: data
    };
  };
   
  export function getIwis() {
    return dispatch => {
        return request
        .get(baseURL +`/iwi`)
        .then(res => {
            dispatch(receiveData(res.body));
        })
        .catch(() => {
          throw Error("Your API route is broke, dumbass!");
        });
    };
  }

  export const getIwiStories = story => {
    return {
      type: "IWI_STORIES",
      story: story
    };
  };
  
  export function getStories() {
    return dispatch => {
      return request
        .get(baseURL + `/story/iwi/1`)
        .then(res => {
          dispatch(getIwiStories(res.body));
        })
        .catch(() => {
          throw Error("Your API route is broke, dumbass!");
        });
    };
  }