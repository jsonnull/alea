/* @flow */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import Firebase from './firebase/'
import commandParser from './middleware/commands'
import messages from './reducers/messages'
import session from './reducers/session'
import sidebar from './reducers/sidebar'
import ui from './reducers/ui'
import user from './reducers/user/'

export default function createStoreWithMiddleware (config: Object) {
  // Create the firebase context
  let firebase = new Firebase(config)

  const reducers = combineReducers({
    messages,
    session,
    sidebar,
    ui,
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
