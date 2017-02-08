/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Chat from './chat'
import Loading from './loading'
import Login from './login'
import Map from './map'
import Sidebar from './Sidebar'
import type { State } from 'types'
import styles from './style.css'

type Props = {
  appIsLoading: boolean,
  userIsLoggedIn: boolean,
  theme: string
}

class App extends React.Component {
  props: Props

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

const mapStateToProps = (state: State) => {
  return {
    appIsLoading: state.ui.appIsLoading,
    userIsLoggedIn: state.ui.userIsLoggedIn,
    theme: state.user.preferences.theme
  }
}

export default connect(mapStateToProps)(App)
