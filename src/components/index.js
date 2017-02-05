import React from 'react'
import { connect } from 'react-redux'
import Chat from './chat'
import Loading from './loading'
import Login from './login'
import Map from './map'
import Sidebar from './sidebar'
import styles from './style.css'

class Frontend extends React.Component {
  render () {
    if (this.props.appIsLoading) {
      return <div className={styles.app}>
        <Loading />
      </div>
    }

    if (!this.props.userIsLoggedIn) {
      return <div className={styles.app}>
        <Login />
      </div>
    }

    return (
      <div className={`${styles.app} ${this.props.theme}`}>
        <Map/>
        <Sidebar/>
        <Chat/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    appIsLoading: state.ui.appIsLoading,
    userIsLoggedIn: state.ui.userIsLoggedIn,
    theme: state.user.preferences.theme
  }
}

export default connect(mapStateToProps)(Frontend)
