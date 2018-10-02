import Login from "../components/Login";

function iwiStories (state = [], action) {

  switch (action.type) {
    case "IWI_STORIES":
      return action.story
      case "RESET":
      return []
    default:
      return state
  }
}

export default iwiStories


