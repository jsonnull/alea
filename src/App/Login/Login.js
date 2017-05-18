/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Button from 'App/components/Button'
import { login } from 'actions'
import styles from './style.css'

type Props = {
  login: Function
}

type State = {
  email: string,
  password: string
}

class Login extends React.Component<*, Props, *> {
  state: State

  constructor (props: Props) {
    super(props)
    this.state = { email: '', password: '' }
  }

  handleEmail (event: Object) {
    this.setState({email: event.target.value})
  }

  handlePassword (event: Object) {
    this.setState({password: event.target.value})
  }

  handleSubmit = (event: Object) => {
    console.log('submitting login')
    event.preventDefault()
    event.stopPropagation()

    this.props.login(
      this.state.email,
      this.state.password
    )
    this.setState({email: '', password: ''})
  }

  render () {
    return (
      <div className={ styles.container }>
        <div className={ styles.login }>
          <h1 className={ styles.title }>Aleamancer</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              className={ styles.input }
              type='text'
              placeholder='email'
              value={this.state.email}
              onChange={e => this.handleEmail(e)}
            />
            <input
              className={ styles.input }
              type='password'
              placeholder='password'
              value={this.state.password}
              onChange={e => this.handlePassword(e)}
            />
            <Button onClick={() => {}} customClass={styles.button}>Login</Button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  login: (email: string, password: string) => dispatch(login(email, password))
})

export default connect(null, mapDispatchToProps)(Login)
