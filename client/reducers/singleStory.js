

function iwiStory (state = {}, action) {

  switch (action.type) {
    case "IWI_STORY":
      console.log(action.story)
      return action.story
    default:
      return state
  }
}

export default iwiStory
