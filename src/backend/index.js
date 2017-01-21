import { createStore, combineReducers, applyMiddleware } from 'redux'
import Firebase from './firebase'
// middleware
import commandParser from './middleware/commands'
import firebaseMiddleware from './middleware/firebase'
// reducers
import chat from '../components/Chat/reducers'
import preferences from '../components/Preferences/reducers'
import sidebar from '../components/Sidebar/reducers'
import user from '../components/User/reducers'
// actions
import {
  updateUser,
  receiveMessage,
  receivePreferences
} from '../actions'

export default function createStoreWithMiddleware (config) {
  // Create the firebase context
  let firebase = new Firebase(config)

  const reducers = combineReducers({
    chat,
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
  firebase.initAuth(
    user => store.dispatch(updateUser(user)),
    prefs => store.dispatch(receivePreferences(prefs))
  )
  firebase.initMessages(message => store.dispatch(receiveMessage(message)))

  return store
}
