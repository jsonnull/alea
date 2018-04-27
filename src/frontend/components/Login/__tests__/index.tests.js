// @flow
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Login from '../index'

describe('Login component', () => {
  const renderer = new ShallowRenderer()

  it('renders correctly', () => {
    renderer.render(
      <Login location={{}} userId={null} performLogin={() => {}} />
    )
    const tree = renderer.getRenderOutput()
    expect(tree).toMatchSnapshot()
  })
})
