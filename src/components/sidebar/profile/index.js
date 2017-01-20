import React from 'react'
import { connect } from 'react-redux'
import {
  logout
} from '../../../actions'
import styles from './style.css'

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
      <div className={ styles.container }>
        <label className={ styles.label }>
          Display Name:
        </label>
        <input
          className={ styles.field }
          type='text'
          value={this.state.displayName}
          onChange={e => this.handleName(e)}
        />
        <button className={styles.button} type='button' onClick={() => this.props.logout() }>Logout</button>
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
