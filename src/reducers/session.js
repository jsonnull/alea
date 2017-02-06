/* @flow */
import type { Action } from '../actions/types'
import type { SessionState } from '../types'

const initialState = {
  name: "Aleamancer"
}

export default function reducer (state: SessionState = initialState, action: Action) {
  switch (action.type) {
    case 'UPDATE_SESSION':
      return state
    default:
      return state
  }
}
