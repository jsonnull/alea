import sendMessage from './firebase/sendMessage'
import savePreferences from './firebase/savePreferences'
import signIn from './firebase/signIn'
import signOut from './firebase/signOut'
import {
  SEND_MESSAGE,
  LOGIN,
  LOGOUT,
  TOGGLE_CHAT_PIN,
  CHANGE_THEME
} from '../../actions'

const firebaseMiddleware = firebase => store => next => {
  // handler function
  const delegate = (fn, action) => {
    fn.apply(null, [firebase, store, action])
  }

  return action => {
    const handleAs = fn => delegate(fn, action)

    switch (action.type) {
      case SEND_MESSAGE:
        handleAs(sendMessage)
        return
      case TOGGLE_CHAT_PIN:
      case CHANGE_THEME:
        setTimeout(() => handleAs(savePreferences), 0)
        next(action)
        return
      case LOGIN:
        handleAs(signIn)
        return
      case LOGOUT:
        handleAs(signOut)
        return
      default:
        next(action)
        return
    }
  }
}

export default firebaseMiddleware
