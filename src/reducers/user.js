import {
  LOGOUT,
  UPDATE_USER
} from '../actions'

const initialState = {
  isLoggedIn: false,
  displayName: 'anonymous',
  photoURL: '/img/default.png'
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      return { ...state, isLoggedIn: false }
    case UPDATE_USER:
      return { ...state, ...action.user }
    default:
      return state
  }
}
