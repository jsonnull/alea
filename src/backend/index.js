import createStoreWithMiddleware from './redux'
import Firebase from './firebase'
import {
  updateUser,
  receiveMessage
} from '../actions'

export default class Backend {
  constructor (config) {
    // Create the firebase backend provider
    let firebase = new Firebase(config)

    // Create the redux store
    this.store = createStoreWithMiddleware(firebase)

    // Log the initial state
    console.log(this.store.getState())

    // Every time the state changes, log it
    let unsubscribe = this.store.subscribe(() =>
      console.log(this.store.getState())
    )

    // Initialize the auth callback
    firebase.initAuth(user => this.store.dispatch(updateUser(user)))

    // Initialize the message reception callback
    firebase.initMessages(message => this.store.dispatch(receiveMessage(message)))
  }
}
