// @flow
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { ThemeProvider } from 'styled-components'
import Settings from '../index.js'
import { light } from 'frontend/styles/themes'

describe('Settings component', () => {
  const renderer = new ShallowRenderer()

  it('renders correctly', () => {
    renderer.render(
      <ThemeProvider theme={light}>
        <Settings
          displayName="test"
          currentUserId="test"
          changeDisplayName={() => {}}
          theme={light}
          changeTheme={() => {}}
          performLogout={() => {}}
        />
      </ThemeProvider>
    )
    const tree = renderer.getRenderOutput()
    expect(tree).toMatchSnapshot()
  })
})
