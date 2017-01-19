import React from 'react'
import { connect } from 'react-redux'

import Chat from './chat'
import Login from './login'
import Map from './map'
import Profile from './user'
import Sidebar from './sidebar'

class Frontend extends React.Component {
  render () {
    if (this.props.loggedIn) {
      return (
        <div>
          <Map/>
          <Sidebar/>
          <Profile/>
          <Chat/>
        </div>
      )
    } else {
      return <Login />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.isLoggedIn
  }
}

const ConnectedFrontend = connect(
  mapStateToProps
)(Frontend)

export default ConnectedFrontend
