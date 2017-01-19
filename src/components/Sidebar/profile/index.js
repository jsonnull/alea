import React from 'react'
import { connect } from 'react-redux'
import {
  logout
} from '../../../actions'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = { displayName: this.props.displayName }
  }

  handleName (event) {
    this.setState({ displayName: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.firebase.updateDisplayName(
      this.state.displayName
    )
  }

  render () {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)} >
          <label className='modal-form-label'>
            Display Name:
            <input
              className='modal-form-input'
              type='text'
              value={this.state.displayName}
              onChange={e => this.handleName(e)}
            />
          </label>
          <div>
            <button className='modal-form-submit' type='button' onClick={() => this.props.logout() }>Logout</button>
            <input className='modal-form-submit' type='submit' value='Update' />
          </div>
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
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
