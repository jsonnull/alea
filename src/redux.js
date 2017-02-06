/* @flow */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import Firebase from './firebase/'
// middleware
import commandParser from './middleware/commands'
// reducers
import messages from './reducers/messages'
import sidebar from './reducers/sidebar'
import user from './reducers/user/'
import ui from './reducers/ui'
// actions
import { receiveMessage } from './actions/'

export default function createStoreWithMiddleware (config: Object) {
  // Create the firebase context
  let firebase = new Firebase(config)

  const reducers = combineReducers({
    messages,
    ui,
    sidebar,
    user
  })

  const middleware = applyMiddleware(
    commandParser,
    firebase.handleActionMiddleware()
  )

  let store = createStore(reducers, middleware)

  // Log the initial state
  console.log(store.getState())
  let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
  )

  firebase.init(store)

  return store
}
