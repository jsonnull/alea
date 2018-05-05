// @flow
import * as React from 'react'
import Logo from 'frontend/components/Logo'
import { Link, Redirect } from 'react-router-dom'
import { Wrapper, Heading, Input, Button, Error, Forgot } from './styles'

type Props = {
  performLogin: Function,
  userId: null | string,
  location: {
    state?: {
      from: string
    }
  }
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
    // See if an error occurred
    if (result.code) {
      if (result.code == 'auth/invalid-email') {
        this.setState({ error: 'The email you entered is invalid.' })
      } else if (result.code == 'auth/wrong-password') {
        this.setState({ error: 'The password is incorrect.' })
      } else if (result.code == 'auth/user-not-found') {
        this.setState({ error: 'There is no account for the given email.' })
      }
      return
    }
  }

  render() {
    const { from } = this.props.location.state || { from: '/sessions' }
    const { userId } = this.props
    const { error } = this.state

    if (userId) {
      return <Redirect to={from} />
    }

    return (
      <Wrapper>
        <Heading>
          <Logo height="26px" />
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
          <Button large onClick={this.submit}>
            Login
          </Button>
          <Forgot>
            <Link to="/forgot_password">Forgot Password?</Link>
          </Forgot>
        </form>
      </Wrapper>
    )
  }
}
