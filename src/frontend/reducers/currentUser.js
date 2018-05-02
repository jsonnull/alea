// @flow
import * as types from 'frontend/actions/types'
import type { Action } from 'frontend/actions/types'

export type CurrentUserState = {
  id: ?string
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
    case types.USER_LOGGED_OUT:
      return { ...initialState }
    default:
      return state
  }
}
