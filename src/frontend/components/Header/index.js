// @flow
import * as React from 'react'
import Home from './Home'
import Logo from './Logo'
import CurrentUser from './CurrentUser'
import Settings from './Settings'
import Login from './Login'
import { Container, Column } from './styles'

type Props = {
  isLoading: boolean,
  userIsLoggedIn: boolean,
  currentUserProfileQuery: {
    currentUser?: { profile: { username: string } }
  }
}

const Header = (_props: Props) => {
  let username = ''

  return (
    <Container>
      <Column>
        <Home />
      </Column>
      <Column>
        <Logo />
      </Column>
      <Column right>
        {username === null ? (
          <Login />
        ) : (
          <React.Fragment>
            <CurrentUser username={username} />
            <Settings />
          </React.Fragment>
        )}
      </Column>
    </Container>
  )
}

export default Header
