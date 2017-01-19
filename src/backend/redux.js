import { createStore, combineReducers, applyMiddleware } from 'redux'
import commandParser from './middleware/commands'
import firebase from './middleware/firebase'
import chat from '../components/Chat/reducers'
import modal from '../components/Modal/reducers'
import preferences from '../components/Preferences/reducers'
import sidebar from '../components/Sidebar/reducers'
import user from '../components/User/reducers'

export default function createStoreWithMiddleware (firebaseContext) {
  const reducers = combineReducers({
    chat,
    modal,
    preferences,
    sidebar,
    user
  })

  const middleware = applyMiddleware(
    commandParser,
    firebase(firebaseContext)
  )

  let store = createStore(reducers, middleware)
  return store
}
