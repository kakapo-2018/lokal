
function iwiStories (state = [], action) {

  switch (action.type) {
    case "IWI_STORIES":
      console.log(action.story)
      return action.story
    default:
      return state
  }
}

export default iwiStories


