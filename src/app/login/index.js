import React from 'react'
import { connect } from 'react-redux'
import {
  login
} from 'actions'
import Button from 'app/components/Button'
import styles from './style.css'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = { email: '', password: '' }
  }

  handleEmail (event) {
    this.setState({email: event.target.value})
  }

  handlePassword (event) {
    this.setState({password: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.login(
      this.state.email,
      this.state.password
    )
    this.setState({email: '', password: ''})
  }

  render () {
    return (
      <div className={ styles.login }>
        <h1 className={ styles.title }>Aleamancer</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
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
          <Button onClick={() => this.handleSubmit()} customClass={styles.button}>Login</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({
    displayName: state.user.displayName
  }, ownProps)
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  }
}

let LoginView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginView
