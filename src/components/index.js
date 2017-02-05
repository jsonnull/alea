import React from 'react'
import { connect } from 'react-redux'
import Chat from './chat'
import Loading from './loading'
import Login from './login'
import Map from './map'
import Profile from './user'
import Sidebar from './sidebar'
import styles from './style.css'

class Frontend extends React.Component {
  render () {
    if (this.props.isLoading) {
      return <div className={styles.app}>
        <Loading />
      </div>
    }

    if (!this.props.isLoggedIn) {
      return <div className={styles.app}>
        <Login />
      </div>
    }

    return (
      <div className={`${styles.app} ${this.props.theme}`}>
        <Map/>
        <Sidebar/>
        <Chat/>
        {/*<Profile/>*/}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.loading,
    isLoggedIn: state.user.isLoggedIn,
    theme: state.preferences.theme
  }
}

const ConnectedFrontend = connect(
  mapStateToProps
)(Frontend)

export default ConnectedFrontend
