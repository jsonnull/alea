import { createStore, combineReducers, applyMiddleware } from 'redux'
import commandParser from './middleware/commands'
import firebase from './middleware/firebase'
import chat from '../components/Chat/reducers'
import modal from '../components/Modal/reducers'
import user from '../components/User/reducers'

const reducers = combineReducers({
  chat,
  modal,
  user
})

export default function createStoreWithMiddleware (firebaseService) {
  const middleware = applyMiddleware(
    commandParser,
    firebase(firebaseService)
  )

  let store = createStore(reducers, middleware)
  return store
}
