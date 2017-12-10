// @flow
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createReducer } from 'redux-orm'
import createSagaMiddleware from 'redux-saga'
import orm from './models/orm'
import * as reducers from './reducers'
import sagas from './sagas/'
import type { ReducerState } from './reducers'

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
