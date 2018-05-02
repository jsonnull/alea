// @flow
import { createStore, combineReducers, applyMiddleware } from 'redux'
import sinon from 'sinon'
import * as reducers from 'frontend/reducers'

export const dispatchSpy = sinon.spy()

const spyReducer = (state = {}, action) => {
  dispatchSpy(action)
  return state
}

export default function createStoreWithMiddleware() {
  // $FlowFixMe: This is erroring for some reason
  const reducer = combineReducers({
    spyReducer,
    ...reducers
  })

  // $FlowFixMe: This is erroring for some reason
  let store = createStore(reducer)

  return store
}
