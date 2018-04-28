// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import Name from '../Name.js'

describe('Settings Name component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Name name="name" saveDisplayName={() => {}} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
