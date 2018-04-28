// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Page from 'frontend/components/Page'
import Heading from 'frontend/components/Heading'
import Label from 'frontend/components/Label'
import Button from 'frontend/components/Button'
import Name from './Name'
import {
  Row,
  ThemeButtons,
  ThemeContainer,
  ThemeHeader,
  ThemeArea,
  ThemeSidebar,
  ThemeChat
} from './styles'
import * as themes from 'frontend/styles/themes'
import type { ThemeName } from 'common/types'
import type { Theme } from 'frontend/styles/themes'

type Props = {
  theme: Theme,
  performLogout: Function,
  changeTheme: (theme: ThemeName) => void,
  changeDisplayName: (name: string) => void,
  displayName: string
}

const Settings = (props: Props) => {
  const {
    displayName,
    changeDisplayName,
    theme,
    changeTheme,
    performLogout
  } = props

  const isLightTheme = theme.name == 'light'
  const isDarkTheme = theme.name == 'dark'

  return (
    <Page>
      <Heading>Profile</Heading>
      <Row>
        <Label>Display Name:</Label>
        <Name name={displayName} saveDisplayName={changeDisplayName} />
      </Row>

      <Heading>Preferences</Heading>
      <Row>
        <Label>Theme</Label>

        <ThemeButtons>
          <ThemeProvider theme={themes['light']}>
            <ThemeContainer
              selected={isLightTheme}
              onClick={() => changeTheme('light')}
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
              onClick={() => changeTheme('dark')}
            >
              <ThemeHeader />
              <ThemeArea>
                <ThemeSidebar />
                <ThemeChat />
              </ThemeArea>
            </ThemeContainer>
          </ThemeProvider>
        </ThemeButtons>
      </Row>
      <Row>
        <Label>Logout</Label>
        <Link to="/logout">
          <Button red onClick={performLogout}>
            Logout
          </Button>
        </Link>
      </Row>
    </Page>
  )
}

export default Settings
