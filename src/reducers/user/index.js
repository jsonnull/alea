/* @flow */
import { combineReducers } from 'redux'
import data from './data'
import preferences from './preferences'
import profile from './profile'

import type { UserDataState } from './data'
import type { UserPreferencesState } from './preferences'
import type { UserProfileState } from './profile'

export type UserState = {
  data: UserDataState,
  preferences: UserPreferencesState,
  profile: UserProfileState
}

export default combineReducers({
  data,
  preferences,
  profile
})
