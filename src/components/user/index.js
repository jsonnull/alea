import React from 'react'
import { connect } from 'react-redux'
import { showModal, MODALS } from '../../actions'
import styles from './style.css'

class User extends React.Component {
  render () {
    let loggedIn = (
      <div>
        <img className={ styles.photo } src={this.props.photo}
          onClick={() => this.props.onProfileClick()}
        />
        <div className={ styles.name }>{this.props.username}</div>
      </div>
    )
    let loggedOut = (
      <div className={ styles.login } onClick={() => this.props.onLoginClick()}>Login</div>
    )
    return (
      <div className={ styles.profile }>
        { (this.props.isLoggedIn == true) ? loggedIn : loggedOut }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    photo: state.user.photoURL,
    username: state.user.displayName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: () => {
      dispatch(showModal(MODALS.LOGIN_MODAL))
    },
    onProfileClick: () => {
      dispatch(showModal(MODALS.PROFILE_MODAL))
    }
  }
}

const UserProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(User)

export default UserProfile
