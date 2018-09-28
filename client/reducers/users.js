
function iwiData (state = [], action) {
  switch (action.type) {
    case "IWI_DATA":
      return action.data
    default:
      return state
  }
}

export default iwiData


