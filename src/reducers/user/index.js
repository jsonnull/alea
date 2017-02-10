/* @flow */
import { combineReducers } from 'redux'
import data from './data'
import preferences from './preferences'
import profile from './profile'

export default combineReducers({
  data,
  preferences,
  profile
})
