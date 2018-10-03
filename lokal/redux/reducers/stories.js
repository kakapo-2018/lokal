function iwiStories (state = [], action) {

  switch (action.type) {
    case "IWI_STORIES":
      return [...action.story]
    default:
      return state
  }
}

export default iwiStories