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

type Props = {
  isLoading: boolean,
  hasError: boolean,
  currentUser: {
    preferences: Object,
    profile: Object
  },
  setTheme: Function,
  changeDisplayName: (name: string) => void
}

const Settings = (props: Props) => {
  const { isLoading } = props
  if (isLoading) {
    return null
  }

  const { theme } = props.currentUser.preferences
  const { username } = props.currentUser.profile

  const { changeDisplayName, setTheme } = props

  const isLightTheme = theme == 'light'
  const isDarkTheme = theme == 'dark'

  return (
    <Page>
      <Heading>Profile</Heading>
      <Row>
        <Label>Display Name:</Label>
        <Name name={username} saveDisplayName={changeDisplayName} />
      </Row>

      <Heading>Preferences</Heading>
      <Row>
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
      </Row>
      <Row>
        <Label>Logout</Label>
        <Link to="/logout">
          <Button red>Logout</Button>
        </Link>
      </Row>
    </Page>
  )
}

export default Settings
