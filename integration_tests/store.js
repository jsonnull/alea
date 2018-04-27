// @flow
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createMemoryHistory } from 'history'
import sinon from 'sinon'
import * as reducers from 'frontend/reducers'

export const history = createMemoryHistory()

export const dispatchSpy = sinon.spy()

const spyReducer = (state = {}, action) => {
  dispatchSpy(action)
  return state
}

export default function createStoreWithMiddleware() {
  // $FlowFixMe: This is erroring for some reason
  const reducer = combineReducers({
    spyReducer,
    ...reducers,
    router: routerReducer
  })

  const middleware = [routerMiddleware(history)]

  // $FlowFixMe: This is erroring for some reason
  let store = createStore(reducer, applyMiddleware(...middleware))

  return store
}
