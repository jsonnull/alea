// @flow
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Page from 'frontend/components/Page'
import Heading from 'frontend/components/Heading'
import Label from 'frontend/components/Label'
import {
  ThemeButtons,
  ThemeContainer,
  ThemeHeader,
  ThemeArea,
  ThemeSidebar,
  ThemeChat
} from './styles'
import * as themes from 'frontend/styles/themes'
import type { DBPreferences } from 'common/types'

type Props = {
  isLoading: boolean,
  hasError: boolean,
  currentUser: {
    preferences: DBPreferences
  },
  setTheme: (name: string) => void
}

const Preferences = (props: Props) => {
  const { isLoading } = props
  if (isLoading) {
    return null
  }

  const { theme } = props.currentUser.preferences

  const { setTheme } = props

  const isLightTheme = theme == 'light'
  const isDarkTheme = theme == 'dark'

  return (
    <Page>
      <Heading>Preferences</Heading>

      <Label>Theme</Label>

      <ThemeButtons>
        <ThemeProvider theme={themes['light']}>
          <ThemeContainer
            selected={isLightTheme}
            onClick={() => setTheme('light')}
          >
            <ThemeHeader />
            <ThemeArea>
              <ThemeSidebar />
              <ThemeChat />
            </ThemeArea>
          </ThemeContainer>
        </ThemeProvider>
        <ThemeProvider theme={themes['dark']}>
          <ThemeContainer
            selected={isDarkTheme}
            onClick={() => setTheme('dark')}
          >
            <ThemeHeader />
            <ThemeArea>
              <ThemeSidebar />
              <ThemeChat />
            </ThemeArea>
          </ThemeContainer>
        </ThemeProvider>
      </ThemeButtons>
    </Page>
  )
}

export default Preferences
