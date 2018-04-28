// @flow
import React from 'react'
import { mount } from 'enzyme'
import App, { history, setupStore, dispatchSpy } from '../../appContainer'
import { userLoggedIn, hydrateUserProfile } from 'frontend/actions'
import { SHOW_SETTINGS } from 'frontend/actions/types'
import Header from 'frontend/containers/Header'

describe('Header container', () => {
  const store = setupStore()
  // Mimic user login and basic details
  store.dispatch(userLoggedIn('testUserId', 'test@example.com'))
  store.dispatch(
    hydrateUserProfile({
      displayName: 'anonymous',
      photoURL: null
    })
  )

  const wrapper = mount(
    <App store={store}>
      <Header />
    </App>
  )

  it('should show the users display name', () => {
    expect(wrapper.text()).toContain('anonymous')
  })
})
