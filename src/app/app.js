/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Chat from './Chat'
import Loading from './loading'
import Login from './login'
import Map from './map'
import Settings from './Settings'
import Sidebar from './Sidebar'
import type { State } from 'store'
import styles from './style.css'

type Props = {
  appIsLoading: boolean,
  userIsLoggedIn: boolean,
  showSettings: boolean,
  theme: string
}

class App extends React.Component {
  props: Props

  render () {
    const { appIsLoading, userIsLoggedIn, showSettings, theme } = this.props

    if (appIsLoading) {
      return <div className={styles.app}>
        <Loading />
      </div>
    }

    if (!userIsLoggedIn) {
      return <div className={styles.app}>
        <Login />
      </div>
    }

    const settings = showSettings ? <Settings /> : null

    return (
      <div className={`${styles.app} ${this.props.theme}`}>
        <Header/>
        <div className={styles.main}>
          <Map/>
          <Sidebar/>
          <Chat/>
        </div>
        { settings }
      </div>
    )
  }
}

const mapStateToProps = (state: State) => {
  return {
    appIsLoading: state.ui.appIsLoading,
    userIsLoggedIn: state.ui.userIsLoggedIn,
    theme: state.user.preferences.theme,
    showSettings: state.ui.showSettings
  }
}

export default connect(mapStateToProps)(App)
