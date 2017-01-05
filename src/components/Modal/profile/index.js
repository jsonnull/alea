import React from 'react'
import { connect } from 'react-redux'
import { hideModal, MODALS } from '../../../actions'

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
        <h1 className='modal-title'>Profile</h1>
        <form
          className='modal-form'
          onSubmit={e => this.handleSubmit(e)}
        >
          <label className='modal-form-label'>
            Display Name:
            <input
              className='modal-form-input'
              type='text'
              value={this.state.displayName}
              onChange={e => this.handleName(e)}
            />
          </label>
          <div className="modal-buttons">
            <input className='modal-form-submit' type='submit' value='Update' />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    displayName: state.user.displayName
  }
}

let ProfileModal = connect(
  mapStateToProps
)(Profile)

export default ProfileModal
