// @flow
import type { State } from '../store'

const userEmailSelector = (state: State) => state.currentUser.email

export default userEmailSelector
