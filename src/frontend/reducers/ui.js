// @flow
import * as types from 'frontend/actions/types'
import type { Action } from 'frontend/actions/types'

export type UIState = {
  initialAuthFinished: boolean,
  appIsLoading: boolean,
  userIsLoggedIn: boolean
}

const initialState = {
  initialAuthFinished: false,
  userIsLoggedIn: false
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
    default:
      return state
  }
}
