// @flow
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import * as reducers from './reducers'
import type { ReducerState } from './reducers'

/* State tree */
export type State = ReducerState

export default function createStoreWithMiddleware(history: Object) {
  const reducer = combineReducers({
    ...reducers,
    router: routerReducer
  })

  const middleware = [routerMiddleware(history)]

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  let store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware))
  )

  return store
}
