/* @flow */
import type { Action } from '../actions/types'
import type { SessionState } from '../types'

const initialState = {
  name: ""
}

export default function reducer (state: SessionState = initialState, action: Action) {
  switch (action.type) {
    case 'UPDATE_SESSION':
      return state
    case 'HYDRATE_SESSION':
      return { ...state, ...action.session }
    default:
      return state
  }
}
