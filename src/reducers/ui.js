import {
  LOGOUT,
  SET_LOADING,
  SET_USER_LOGGED_IN
} from '../actions'

const initialState = {
  appIsLoading: true,
  userIsLoggedIn: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      return { ...state, userIsLoggedIn: false }
    case SET_LOADING:
      return { ...state, appIsLoading: action.appIsLoading }
    case SET_USER_LOGGED_IN:
      return { ...state, userIsLoggedIn: true }
    default:
      return state
  }
}
