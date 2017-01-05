import createStoreWithMiddleware from './redux'
import Firebase from './firebase'
import {
  updateUser,
  receiveMessage,
  receivePreferences
} from '../actions'

export default class ReduxBackend {
  constructor (config) {
    // Create the firebase context
    let firebase = new Firebase(config)

    // Create the redux store
    this.store = createStoreWithMiddleware(firebase)

    // Log the initial state
    console.log(this.store.getState())

    // Every time the state changes, log it
    let unsubscribe = this.store.subscribe(() =>
      console.log(this.store.getState())
    )

    // Perform the initial login
    firebase.initAuth(
      user => this.store.dispatch(updateUser(user)),
      prefs => this.store.dispatch(receivePreferences(prefs))
    )

    // Watch latest messages
    firebase.initMessages(message => this.store.dispatch(receiveMessage(message)))
  }
}
