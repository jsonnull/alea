import React from 'react'
import { connect } from 'react-redux'

import Chat from './Chat'
import Login from './Login'
import Map from './Map'
import Profile from './User'
import Sidebar from './Sidebar'

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
