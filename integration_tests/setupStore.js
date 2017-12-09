// @flow
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createMemoryHistory } from 'history'
import { createReducer } from 'redux-orm'
import createSagaMiddleware from 'redux-saga'
import sinon from 'sinon'
import orm from '../src/models/orm'
import currentUser from 'reducers/currentUser'
import messages from 'reducers/messages'
import session from 'reducers/session'
import sidebar from 'reducers/sidebar'
import ui from 'reducers/ui'
import user from 'reducers/user/'
import sagas from './setupSagas'

export const history = createMemoryHistory()

export const dispatchSpy = sinon.spy()

const spyReducer = (state = {}, action) => {
  dispatchSpy(action)
  return state
}

export default function createStoreWithMiddleware() {
  const reducers = combineReducers({
    spyReducer,
    orm: createReducer(orm),
    currentUser,
    messages,
    session,
    sidebar,
    ui,
    user,
    router: routerReducer
  })

  const sagaMiddleware = createSagaMiddleware()
  const middleware = [routerMiddleware(history), sagaMiddleware]

  let store = createStore(reducers, applyMiddleware(...middleware))

  sagaMiddleware.run(sagas)

  return store
}
