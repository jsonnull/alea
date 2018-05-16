// @flow
import * as types from 'frontend/actions/types'
import type { Action } from 'frontend/actions/types'

export type LockState = boolean

const initialState = false

export default function reducer(
  state: LockState = initialState,
  action: Action
) {
  switch (action.type) {
    case types.LOCK_ENTER:
      return true
    case types.UNLOCK_ENTER:
      return false
    default:
      return state
  }
}
