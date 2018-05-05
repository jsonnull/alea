// @flow
import * as React from 'react'
import Logo from 'frontend/components/Logo'
import { Wrapper, Heading, Input, Button, Error, Success } from './styles'

type Props = {
  sendPasswordResetEmail: Function
}

type State = {
  error: string | null,
  success: string | null
}

export default class ResetPasswordNew extends React.Component<Props, State> {
  state = {
    error: null,
    success: null
  }

  username = React.createRef()

  submit = async (e: SyntheticEvent<>) => {
    const { sendPasswordResetEmail } = this.props

    e.preventDefault()
    e.stopPropagation()

    this.setState({ error: null, success: null })

    if (!this.username.current) {
      return
    }

    const username = this.username.current.value

    const result = await sendPasswordResetEmail(username)
    if (result.error === true) {
      if (result.code == 'auth/invalid-email') {
        this.setState({ error: 'The email you entered is invalid.' })
      } else if (result.code == 'auth/user-not-found') {
        this.setState({ error: 'There is no account for the given email.' })
      } else {
        this.setState({ error: 'An unexpected error occurred.' })
      }
    } else if (result.success === true) {
      this.setState({
        success: 'Check your email to complete your password reset.'
      })
    }
  }

  render() {
    const { error, success } = this.state
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
          {error && <Error>{error}</Error>}
          {success && <Success>{success}</Success>}
          <Button large onClick={this.submit}>
            Reset my password
          </Button>
        </form>
      </Wrapper>
    )
  }
}
