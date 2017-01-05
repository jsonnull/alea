import React from 'react'
import { connect } from 'react-redux'
import { hideModal, MODALS } from '../../actions'
import Login from './login'
import Profile from './profile'
import styles from './style.css'

class Modal extends React.Component {
  render () {
    if (this.props.activeModal == null) {
      return null
    }

    let Child
    if (this.props.activeModal == MODALS.LOGIN_MODAL) {
      Child = Login
    } else if (this.props.activeModal == MODALS.PROFILE_MODAL) {
      Child = Profile
    }

    const title = (text) => <h1 className={ styles.title }>{ text }</h1>
    const buttons = (children) => <div className={ styles.buttons }>{ children }</div>

    return (
      <div>
        <div className={ styles.overlay } onClick={() => this.props.onClose()}>&nbsp;</div>
        <div className={ styles.modal }>
          <Child
            title={ title } 
            buttons={ buttons }
          />
          <div
            className={ styles.close }
            onClick={() => this.props.onClose()}
          ><i className='fa fa-close'></i></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeModal: state.modal.activeModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: () => {
      dispatch(hideModal())
    }
  }
}

const ModalView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)

export default ModalView
