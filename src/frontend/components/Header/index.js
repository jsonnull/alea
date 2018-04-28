// @flow
import * as React from 'react'
import Home from './Home'
import Logo from './Logo'
import CurrentUser from './CurrentUser'
import Settings from './Settings'
import Login from './Login'
import { Container, Column } from './styles'

type Props = {
  username: string | null
}

const Header = (props: Props) => {
  const { username } = props

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
