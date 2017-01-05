import { createStore, combineReducers, applyMiddleware } from 'redux'
import commandParser from './middleware/commands'
import firebase from './middleware/firebase'
import chat from '../components/Chat/reducers'
import modal from '../components/Modal/reducers'
import user from '../components/User/reducers'
import preferences from '../components/Preferences/reducers'

export default function createStoreWithMiddleware (firebaseContext) {
  const reducers = combineReducers({
    chat,
    modal,
    user,
    preferences
  })

  const middleware = applyMiddleware(
    commandParser,
    firebase(firebaseContext)
  )

  let store = createStore(reducers, middleware)
  return store
}
