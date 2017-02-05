import {
  LOGOUT,
  UPDATE_USER_PROFILE
} from '../../actions'

const initialState = {
  displayName: 'anonymous',
  photoURL: '/img/default.png'
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_PROFILE:
      return { ...state, ...action.user }
    default:
      return state
  }
}
