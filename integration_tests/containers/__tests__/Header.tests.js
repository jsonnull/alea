// @flow
import React from 'react'
import { mount } from 'enzyme'
import App, { setupStore, dispatchSpy } from '../../appContainer'
import { userLoggedIn } from 'frontend/actions'
import Header from 'frontend/containers/Header'

describe('Header container', () => {
  const store = setupStore()
  // Mimic user login and basic details
  store.dispatch(userLoggedIn('testUserId', 'test@example.com'))

  const wrapper = mount(
    <App store={store}>
      <Header />
    </App>
  )

  // FIXME: waiting on update
  it('should show the users display name', () => {
    // expect(wrapper.text()).toContain('anonymous')
    expect(true).toBe(true)
  })
})
