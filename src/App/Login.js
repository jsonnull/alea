/* @flow */
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { compose, withState, withHandlers } from 'recompose'
// import Button from 'App/components/Button'
import { login } from 'actions'
import { header } from 'styles/fonts'

const enhance = compose(
  connect(null, (dispatch: Function) => ({
    login: (email: string, password: string) => dispatch(login(email, password))
  })),
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withHandlers({
    onEmailChange: ({ setEmail }) => (e: Object) => setEmail(e.target.value),
    onPasswordChange: ({ setPassword }) => (e: Object) =>
      setPassword(e.target.value),
    onLogin: ({ login, email, password, setPassword }) => (e: Object) => {
      e.preventDefault()
      e.stopPropagation()

      login(email, password)
      setPassword('')
    }
  })
)

type Props = {
  email: string,
  password: string,
  onEmailChange: Function,
  onPasswordChange: Function,
  onLogin: Function
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Login = styled.div`
  width: 300px;
  align-self: center;
  margin: auto;
  background: ${props => props.theme.background};
  border-radius: 5px;
  padding: 2.4rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
`

const Heading = styled.h1`
  font-family: ${header};
  text-align: center;
  margin: 0;
  margin-bottom: 1.2rem;
  line-height: 3.6rem;
`

// FIXME: Extend input element
const Input = styled.input`
  border-radius: 0;
  background: none;
  border: none;
  padding: 0;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  width: 100%;
  margin-bottom: 1.2rem;
`

// FIXME: Extend button element
const Button = styled.button`
  display: block;
  position: relative;
  margin: 0 auto 0;
`

export default enhance((props: Props) => {
  return (
    <Container>
      <Login>
        <Heading>Aleamancer</Heading>
        <form onSubmit={props.onLogin}>
          <Input
            name="username"
            type="text"
            placeholder="email"
            value={props.email}
            onChange={props.onEmailChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="password"
            value={props.password}
            onChange={props.onPasswordChange}
          />
          <Button onClick={() => {}}>Login</Button>
        </form>
      </Login>
    </Container>
  )
})
