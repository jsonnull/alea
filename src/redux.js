import { createStore, combineReducers, applyMiddleware } from 'redux'
import Firebase from './firebase/'
// middleware
import commandParser from './middleware/commands'
import firebaseMiddleware from './middleware/firebase'
// reducers
import chat from './reducers/messages'
import loading from './reducers/loading'
import preferences from './reducers/preferences'
import sidebar from './reducers/sidebar'
import user from './reducers/user'
// actions
import { receiveMessage } from './actions'

export default function createStoreWithMiddleware (config) {
  // Create the firebase context
  let firebase = new Firebase(config)

  const reducers = combineReducers({
    chat,
    loading,
    preferences,
    sidebar,
    user
  })

  const middleware = applyMiddleware(
    commandParser,
    firebaseMiddleware(firebase)
  )

  let store = createStore(reducers, middleware)

  // Log the initial state
  console.log(store.getState())
  let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
  )

  // Register firebase callbacks
  firebase.initAuth(store)
  firebase.initMessages(message => store.dispatch(receiveMessage(message)))

  return store
}
