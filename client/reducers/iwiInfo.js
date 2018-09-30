
function iwiInfo (state = [], action) {

    switch (action.type) {
      case "IWI_INFO":
        return action.info
      default:
        return state
    }
  }
  
  export default iwiInfo
  
  
  