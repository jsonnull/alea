// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { ConnectedRouter } from 'react-router-redux'
import { USER_LOGGED_IN, SHOW_SETTINGS } from '../../../src/actions/types'
import setupStore, { history } from '../../setupStore'
import Pages from '../../../src/pages'

describe('App container', () => {
  let store, wrapper

  beforeEach(() => {
    store = setupStore()

    wrapper = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Pages />
        </ConnectedRouter>
      </Provider>
    )
  })

  it('should allow user to open settings', () => {
    store.dispatch({ type: USER_LOGGED_IN })
    store.dispatch({ type: SHOW_SETTINGS })
    wrapper.update()
    expect(wrapper.find('Settings').length).toBeGreaterThan(0)
  })
})
