// @flow
import type { State } from '../store'

const currentUserSelector = (state: State) => {
  return state.currentUser
}

export default currentUserSelector
