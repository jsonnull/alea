// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'
import Logo from './Logo'
import CurrentUser from './CurrentUser'
import Settings from './Settings'
import { Container, Column } from './styles'

const NavLink = styled(Link)`
  text-decoration: none;
`

type Props = {
  isLoading: boolean,
  currentUserProfileQuery: {
    currentUser: { profile: { username: string } }
  }
}

const Header = (props: Props) => {
  const username = props.isLoading
    ? ''
    : props.currentUserProfileQuery.currentUser.profile.username

  return (
    <Container>
      <Column>
        <NavLink to="/sessions">
          <Button>Games</Button>
        </NavLink>
      </Column>
      <Column middle>
        <Logo />
      </Column>
      <Column right>
        <React.Fragment>
          <CurrentUser username={username} />
          <Settings />
        </React.Fragment>
      </Column>
    </Container>
  )
}

export default Header
