/* @flow */
import type { Action } from '../../actions/types'

export type UserProfileState = {
  displayName: string,
  photoURL: ?string
}

const initialState = {
  displayName: 'anonymous',
  photoURL: ''
}

export default function reducer (state: UserProfileState = initialState, action: Action) {
  switch (action.type) {
    case 'UPDATE_USER_PROFILE':
    case 'HYDRATE_USER_PROFILE':
      return { ...state, ...action.user }
    default:
      return state
  }
}
