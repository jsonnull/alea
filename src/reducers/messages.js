/* @flow */
import type { Action } from '../actions/types'
import type { MessagesState } from '../types'

const initialState = []

export default function reducer (state: MessagesState = initialState, action: Action) {
  switch (action.type) {
    case 'RECEIVE_MESSAGE':
      const { key, from, text, result } = action
      return state.concat({ key, from, text, result })
    default:
      return state
  }
}
