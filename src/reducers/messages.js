/* @flow */
import type { Action } from '../actions/types'
import type { Message } from 'types'

export type MessagesState = Array<Message>

const initialState = []

export default function reducer (state: MessagesState = initialState, action: Action) {
  switch (action.type) {
    case 'RECEIVE_MESSAGE':
      const { key, from, text, result, timestamp } = action
      return state.concat({ key, from, text, result, timestamp })
    default:
      return state
  }
}
