import sendMessage from './firebase/sendMessage'
import savePreferences from './firebase/savePreferences'
import signIn from './firebase/signIn'
import signOut from './firebase/signOut'
import {
  SEND_MESSAGE,
  LOGIN,
  LOGOUT,
  TOGGLE_CHAT_PIN
} from '../../actions'

const firebaseMiddleware = firebase => store => next => {
  // handler function
  const delegate = (fn, action) => {
    fn.apply(null, [firebase, store, action])
  }

  return action => {
    const handleAs = fn => delegate(fn, action)

    if (action.type == SEND_MESSAGE) {
      handleAs(sendMessage)
    } else if (action.type == TOGGLE_CHAT_PIN) {
      setTimeout(() => handleAs(savePreferences), 0)
      next(action)
    } else if (action.type == LOGIN) {
      handleAs(signIn)
    } else if (action.type == LOGOUT) {
      handleAs(signOut)
    } else {
      next(action)
    }
  }
}

export default firebaseMiddleware
