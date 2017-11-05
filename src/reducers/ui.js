// @flow
import type { Action } from 'actions/types'

export type UIState = {
  appIsLoading: boolean,
  userIsLoggedIn: boolean,
  showSettings: boolean
}

const initialState = {
  appIsLoading: true,
  userIsLoggedIn: false,
  showSettings: false
}

export default function reducer(state: UIState = initialState, action: Action) {
  switch (action.type) {
    case 'APP_FINISHED_LOADING':
      return {
        ...state,
        appIsLoading: false
      }
    case 'USER_LOGGED_IN':
      return {
        ...state,
        userIsLoggedIn: true
      }
    case 'USER_LOGGED_OUT':
      return {
        ...state,
        userIsLoggedIn: false
      }
    case 'SHOW_SETTINGS':
      return {
        ...state,
        showSettings: true
      }
    case 'HIDE_SETTINGS':
      return {
        ...state,
        showSettings: false
      }
    default:
      return state
  }
}
