/* @flow */
import type { Action } from '../../actions/types'
import type { UserProfileState } from '../../types'

const initialState = {
  displayName: 'anonymous',
  photoURL: '/img/default.png'
}

export default function reducer (state: UserProfileState = initialState, action: Action) {
  switch (action.type) {
    case 'UPDATE_USER_PROFILE':
      return { ...state, ...action.user }
    default:
      return state
  }
}
