// @flow
import * as types from '../actions/types'
import type { Action } from '../actions/types'

export type CurrentUserState = {
  id: null | string,
  displayName: string,
  photoURL: ?string,
  sessions: Array<string>
}

export const initialState = {
  id: null,
  displayName: 'anonymous',
  photoURL: undefined,
  sessions: []
}

export default function reducer(
  state: CurrentUserState = initialState,
  action: Action
) {
  switch (action.type) {
    case types.USER_LOGGED_IN:
      return { ...state, id: action.id }
    case types.PERFORM_USER_LOGOUT:
      return { ...initialState }
    case types.UPDATE_USER_PROFILE:
    case types.HYDRATE_USER_PROFILE:
      return { ...state, ...action.user }
    case types.CHANGE_DISPLAY_NAME:
      return { ...state, displayName: action.name }
    default:
      return state
  }
}
