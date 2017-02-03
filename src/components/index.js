import React from 'react'
import { connect } from 'react-redux'
import Chat from './chat'
import Login from './login'
import Map from './map'
import Profile from './user'
import Sidebar from './sidebar'
import styles from './style.css'

class Frontend extends React.Component {
  render () {
    if (this.props.loggedIn) {
      return (
        <div className={`${styles.app} ${this.props.theme}`}>
          <Map/>
          <Sidebar/>
          <Chat/>
          {/*<Profile/>*/}
        </div>
      )
    } else {
      return <Login />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.isLoggedIn,
    theme: state.preferences.theme
  }
}

const ConnectedFrontend = connect(
  mapStateToProps
)(Frontend)

export default ConnectedFrontend
