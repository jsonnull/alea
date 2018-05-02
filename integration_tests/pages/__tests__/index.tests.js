// @flow
import React from 'react'
import { mount } from 'enzyme'
import App, { setupStore } from '../../appContainer'
import Pages from 'frontend/routes'

describe('App container', () => {
  let store, wrapper

  beforeEach(() => {
    store = setupStore()

    wrapper = mount(
      <App store={store}>
        <Pages />
      </App>
    )
  })

  it('should pass', () => {
    expect(true).toBe(true)
  })
})
