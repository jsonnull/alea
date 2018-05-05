// @flow
import * as React from 'react'
import Logo from 'frontend/components/Logo'
import { Container, LogoButton, Button } from './styles'

type Props = {
  userIsLoggedIn: boolean
}

const FrontHeader = (props: Props) => {
  return (
    <Container>
      <LogoButton to="/">
        <Logo height="26px" />
      </LogoButton>
      {props.userIsLoggedIn ? (
        <Button to="/sessions">My Games</Button>
      ) : (
        <Button to="/login">Log In</Button>
      )}
    </Container>
  )
}

export default FrontHeader
