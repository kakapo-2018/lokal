import {combineReducers} from 'redux'
import iwiData from './users'
import iwiStories from './story'
import auth from './auth'

export default combineReducers({
   auth,
   iwiData,
   iwiStories
})
