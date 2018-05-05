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
          <Header
            isLoading={true}
            hasError={false}
            currentUserProfileQuery={{
              currentUser: { profile: { username: '' } }
            }}
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
            currentUserProfileQuery={{
              currentUser: { profile: { username: 'test' } }
            }}
          />
        </MemoryRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
