// @flow
import * as React from 'react'
import Logo from 'frontend/components/Logo'
import { Wrapper, Heading, Input, Button, Error } from './styles'

type Props = {
  performLogin: Function
}

type State = {
  error: string | null
}

export default class Login extends React.Component<Props, State> {
  state = {
    error: null
  }

  username = React.createRef()
  password = React.createRef()

  submit = async (e: SyntheticEvent<>) => {
    const { performLogin } = this.props

    e.preventDefault()
    e.stopPropagation()

    this.setState({ error: null })

    if (!this.username.current || !this.password.current) {
      return
    }

    const username = this.username.current.value
    const password = this.password.current.value

    const result = await performLogin(username, password)
    if (result.code) {
      if (result.code == 'auth/invalid-email') {
        this.setState({ error: 'The email you entered is invalid.' })
      } else if (result.code == 'auth/wrong-password') {
        this.setState({ error: 'The password is incorrect.' })
      } else if (result.code == 'auth/user-not-found') {
        this.setState({ error: 'There is no account for the given email.' })
      }
    }
  }

  render() {
    const { error } = this.state
    return (
      <Wrapper>
        <Heading>
          <Logo height="25px" />
        </Heading>
        <form onSubmit={this.submit}>
          <Input
            name="username"
            type="text"
            placeholder="email"
            innerRef={this.username}
          />
          <Input
            name="password"
            type="password"
            placeholder="password"
            innerRef={this.password}
          />
          {error && <Error>{error}</Error>}
          <Button onClick={this.submit}>Login</Button>
        </form>
      </Wrapper>
    )
  }
}
