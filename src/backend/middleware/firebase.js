import sendMessage from './firebase/sendMessage'
import savePreferences from './firebase/savePreferences'
import {
  SEND_MESSAGE,
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
    } else {
      next(action)
    }
  }
}

export default firebaseMiddleware
