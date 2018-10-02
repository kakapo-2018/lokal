import {combineReducers} from 'redux'
import iwiData from './users'
import iwiStories from './story'
import iwiInfo from './iwiInfo'
import iwiStory from './singleStory'
import auth from './auth'
import showModal from './showModal'

export default combineReducers({
   auth,
   iwiData,
   iwiStories,
   iwiInfo,
   iwiStory,
   showModal
})
