// @flow
import { combineReducers } from 'redux'
import data from './data'
import preferences from './preferences'

import type { UserDataState } from './data'
import type { UserPreferencesState } from './preferences'

export type UserState = {
  data: UserDataState,
  preferences: UserPreferencesState
}

export default combineReducers({
  data,
  preferences
})
