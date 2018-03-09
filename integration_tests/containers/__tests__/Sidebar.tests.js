// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { push, ConnectedRouter } from 'react-router-redux'
import { hydrateSessionsList } from '../../../src/actions'
import setupStore, { history } from '../../setupStore'
import Sidebar from '../../../src/containers/Sidebar'

describe('Sidebar container', () => {
  const store = setupStore()
  const sessions = [
    {
      id: 'id1',
      meta: {
        name: 'Test Session'
      }
    }
  ]
  store.dispatch(hydrateSessionsList(sessions))
  store.dispatch(push('/g/test-session/id1'))

  const wrapper = mount(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Sidebar />
      </ConnectedRouter>
    </Provider>
  )

  it('show the name of the session', () => {
    expect(wrapper.text()).toContain('Test Session')
  })

  it('should allow the user to change tabs', () => {
    expect(store.getState().sidebar.tab).toEqual('Session')
    wrapper
      .find('MenuItem[name="Character"]')
      .find('div[selected=false]')
      .simulate('click')
    expect(store.getState().sidebar.tab).toEqual('Character')
  })
})
