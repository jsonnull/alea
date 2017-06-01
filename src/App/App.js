/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'
import Loading from './Loading'
import Login from './Login'
import Game from './Game'
import Header from './Header'
import Sessions from './Sessions'
import Settings from './Settings'
import type { State } from 'store'
import styles from './style.css'

type Props = {
  appIsLoading: boolean,
  userIsLoggedIn: boolean,
  showSettings: boolean,
  location: Object,
  theme: string
}

class App extends React.Component {
  props: Props

  render () {
    const { appIsLoading, userIsLoggedIn, showSettings, theme } = this.props

    if (appIsLoading) {
      return <Loading />
    }

    if (!userIsLoggedIn) {
      return <Login />
    }

    const settings = showSettings ? <Settings /> : null

    return (
      <div className={`${styles.app} ${theme}`}>
        <Header />
        <Switch>
          <Route exact path="/" component={Sessions} />
          <Route path="/g/:id/" component={Game} />
        </Switch>
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
    showSettings: state.ui.showSettings,
    location: state.router.location
  }
}

export default connect(mapStateToProps)(App)
