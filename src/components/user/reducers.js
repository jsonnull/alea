import {
  UPDATE_USER,
} from '../../actions'

const initialState = {
  isLoggedIn: false,
  displayName: 'anonymous',
  photoURL: '/img/default.png'
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, ...action.user }
    default:
      return state
  }
}
