// @flow
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { createReducer } from 'redux-orm'
import createSagaMiddleware from 'redux-saga'
import * as reducers from './reducers'
import type { ReducerState } from './reducers'
import orm from './models/orm'
import sagas from './sagas/'

/* State tree */
export type State = {
  orm: Object
} & ReducerState

export default function createStoreWithMiddleware(history: Object) {
  const reducer = combineReducers({
    orm: createReducer(orm),
    ...reducers,
    router: routerReducer
  })

  const sagaMiddleware = createSagaMiddleware()
  const middleware = [routerMiddleware(history), sagaMiddleware]

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  let store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware))
  )

  sagaMiddleware.run(sagas)

  return store
}
