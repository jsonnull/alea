// @flow
import type { State } from '../store'

const currentUserSelector = (state: State) => state.currentUser

export default currentUserSelector
