// @flow
import type { State } from '../store'

const userIdSelector = (state: State) => state.currentUser.id

export default userIdSelector
