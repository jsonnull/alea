// @flow
import * as types from 'actions/types'
import type { Action } from '../actions/types'

export type CurrentUserState = {
  id: null | string
}

const initialState = {
  id: null
}

export default function reducer(
  state: CurrentUserState = initialState,
  action: Action
) {
  switch (action.type) {
    case types.USER_LOGGED_IN:
      return { ...state, id: action.id }
    case types.PERFORM_USER_LOGOUT:
      return { ...state, id: null }
    default:
      return state
  }
}
