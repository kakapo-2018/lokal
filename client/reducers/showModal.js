export default function modalReducer (state = false, action) {
  switch(action.type) {
    case 'MODAL_ON':
      return true
    case 'MODAL_OFF':
      return false
    default: return state
  }
}