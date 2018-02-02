// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { ConnectedRouter } from 'react-router-redux'
import {
  APP_FINISHED_LOADING,
  SHOW_SETTINGS,
  USER_LOGGED_IN
} from '../../../src/actions/types'
import setupStore, { history } from '../../setupStore'
import App from '../../../src/pages/App'

describe('App container', () => {
  let store, wrapper

  beforeEach(() => {
    store = setupStore()
    store.dispatch({ type: USER_LOGGED_IN })

    wrapper = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    )
  })

  it('should show loading screen', () => {
    expect(wrapper.find('LoadingModal')).toHaveLength(1)
  })

  it('should dismiss loading screen', () => {
    store.dispatch({ type: APP_FINISHED_LOADING })
    wrapper.update()
    expect(wrapper.find('LoadingModal')).toHaveLength(0)
  })

  // TODO: Ensure this test coverage is present on new Login page tests
  /*
  it('should show login', () => {
    store.dispatch({ type: APP_FINISHED_LOADING })
    wrapper.update()
    expect(wrapper.find('input[name="username"]')).toHaveLength(1)
  })

  it('should allow user to login', () => {
    store.dispatch({ type: APP_FINISHED_LOADING })
    store.dispatch({ type: USER_LOGGED_IN })
    wrapper.update()
    expect(wrapper.find('Sessions')).toHaveLength(1)
  })
  */
})
