/* @flow */
import { combineReducers } from 'redux'
import preferences from './preferences'
import profile from './profile'

export default combineReducers({
  preferences,
  profile
})
