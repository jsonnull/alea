// @flow
import { combineReducers } from 'redux'
import data from './data'

import type { UserDataState } from './data'

export type UserState = {
  data: UserDataState
}

export default combineReducers({
  data
})
