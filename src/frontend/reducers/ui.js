// @flow
import * as types from 'frontend/actions/types'
import type { Action } from 'frontend/actions/types'

export type UIState = {
  initialAuthFinished: boolean,
  userIsLoggedIn: boolean,
  showRollManager: boolean
}

const initialState = {
  initialAuthFinished: false,
  userIsLoggedIn: false,
  showRollManager: false
}

export default function reducer(state: UIState = initialState, action: Action) {
  switch (action.type) {
    case types.INITIAL_AUTH_FINISHED:
      return {
        ...state,
        initialAuthFinished: true
      }
    case types.USER_LOGGED_IN:
      return {
        ...state,
        userIsLoggedIn: true
      }
    case types.USER_LOGGED_OUT:
      return {
        ...state,
        userIsLoggedIn: false
      }
    case types.SHOW_ROLL_MANAGER:
      return {
        ...state,
        showRollManager: true
      }
    case types.HIDE_ROLL_MANAGER:
      return {
        ...state,
        showRollManager: false
      }
    default:
      return state
  }
}
