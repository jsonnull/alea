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
      const { isLoggedIn, displayName, photoURL } = action.user
      return {
        ...state,
        isLoggedIn,
        displayName,
        photoURL
      }
    default:
      return state
  }
}
