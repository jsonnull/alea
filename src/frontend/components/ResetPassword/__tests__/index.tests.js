// @flow
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import ResetPassword from '../index'

describe('Password reset component', () => {
  const renderer = new ShallowRenderer()

  it('renders correctly', () => {
    renderer.render(<ResetPassword sendPasswordResetEmail={() => {}} />)
    const tree = renderer.getRenderOutput()
    expect(tree).toMatchSnapshot()
  })
})
