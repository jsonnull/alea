// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'
import Header from '../index.js'

describe('Header component', () => {
  it('renders correctly with no user', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Header
            isLoading={false}
            hasError={false}
            currentUserProfileQuery={{}}
            userIsLoggedIn={false}
            username={null}
            showSettings={() => {}}
          />
        </MemoryRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when logged in', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Header
            isLoading={false}
            hasError={false}
            currentUserProfileQuery={{}}
            userIsLoggedIn={false}
            username="test"
            showSettings={() => {}}
          />
        </MemoryRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
