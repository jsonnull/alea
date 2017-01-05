import React from 'react'
import { connect } from 'react-redux'
import { hideModal, MODALS } from '../../../actions'

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
    this.props.firebase.signIn(
      this.state.email,
      this.state.password
    )
    this.setState({email: '', password: ''})
  }

  render () {
    return (
      <div>
        <h1 className='title'>Login</h1>
        <form
          className='modal-form'
          onSubmit={e => this.handleSubmit(e)}
        >
          <input
            className='modal-form-input'
            type='text'
            placeholder='email'
            value={this.state.email}
            onChange={e => this.handleEmail(e)}
          />
          <input
            className='modal-form-input'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={e => this.handlePassword(e)}
          />
          <input className='modal-form-submit' type='submit' value='Login' />
        </form>
      </div>
    )
  }
}
