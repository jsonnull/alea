import {
  LOAD_MESSAGES,
  LOGIN,
  LOGOUT,
  SAVE_PREFERENCES,
  SEND_MESSAGE,
  UPDATE_USER
} from '../actions'

const firebaseMiddleware = firebase => store => next => action => {
  const firebaseCommand = action.firebase
  const state = store.getState()

  // Early return if nothing for Firebase
  if (firebaseCommand == undefined) {
    return next(action)
  }

  // Error on Firebase-y actions if there's no logged-in user
  if (firebaseCommand !== LOGIN && firebase.auth.currentUser == undefined) {
    console.error('User is not signed in')
    return
  }

  switch (firebaseCommand) {
    case SAVE_PREFERENCES:
      setTimeout(() => firebase.savePreferences(store.getState()), 0)
      break
    case LOAD_MESSAGES:
      firebase.loadMessages()
      break
    case LOGIN:
      firebase.login(action)
      break
    case LOGOUT:
      firebase.logout(state)
      break
    case SEND_MESSAGE:
      firebase.sendMessage(state, action)
      break
    case UPDATE_USER:
      firebase.updateUser(action)
      break
    default:
      break
  }

  next(action)
}

export default firebaseMiddleware
