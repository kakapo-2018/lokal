import {combineReducers} from 'redux'
import iwiData from './users'
import iwiStories from './story'
import iwiInfo from './iwiInfo'
import iwiStory from './singleStory'

export default combineReducers({
   iwiData,
   iwiStories,
   iwiInfo,
   iwiStory
})
