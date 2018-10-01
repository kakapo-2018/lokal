function iwiStory(state = {}, action) {
  switch (action.type) {
    case "IWI_STORY":
      console.log(action.story);
      return action.story;
    case "RESET_STORY":
      return {};
    default:
      return state;
  }
}

export default iwiStory;
