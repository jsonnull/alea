// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'
import Header from '../index.js'

describe('Header component', () => {
  it('renders correctly when loading', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Header isLoading={true} currentUserProfileQuery={null} />
        </MemoryRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when logged in', () => {
    const currentUser = {
      profile: {
        id: 'testId',
        avatar: null,
        username: 'test username'
      }
    }
    const tree = renderer
      .create(
        <MemoryRouter>
          <Header
            isLoading={false}
            currentUserProfileQuery={{
              currentUser
            }}
          />
        </MemoryRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
