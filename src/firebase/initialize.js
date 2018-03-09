// @flow
import firebase from '@firebase/app'
import { userLoggedIn } from '../actions'
import { APP_FINISHED_LOADING } from '../actions/types'

// Initiates Firebase auth and listen to auth state changes
const initialize = (config: Object, store: Object) => {
  firebase.initializeApp(config)

  firebase.auth().onAuthStateChanged((user: ?Object) => {
    if (user) {
      store.dispatch(userLoggedIn(user.uid, user.email))
    } else {
      store.dispatch({ type: APP_FINISHED_LOADING })
    }
  })
}

export default initialize
