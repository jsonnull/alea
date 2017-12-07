// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import Settings from '../index.js'
import { light } from '../../../styles/themes'

describe('Settings component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={light}>
          <Settings
            showSettings={true}
            displayName="test"
            changeDisplayName={() => {}}
            theme={light}
            changeTheme={() => {}}
            logout={() => {}}
            dismissSettings={() => {}}
          />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
