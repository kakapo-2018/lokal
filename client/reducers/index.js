import {combineReducers} from 'redux'
import iwiData from './users'
import iwiStories from './story'
import iwiInfo from './iwiInfo'
import iwiStory from './singleStory'
import auth from './auth'

export default combineReducers({
   auth,
   iwiData,
   iwiStories,
   iwiInfo,
   iwiStory
})
