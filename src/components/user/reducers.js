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
      return {
        ...state,
        isLoggedIn: state.isLoggedIn || action.user.isLoggedIn,
        displayName: action.user.displayName || 'anonymous',
        photoURL: action.user.photoURL || '/img/default.png'
      }
    default:
      return state
  }
}
