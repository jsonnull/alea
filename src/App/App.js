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
import * as themes from 'styles/themes'
import type { State } from 'store'
import styled from 'styled-components'

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
    const { appIsLoading, userIsLoggedIn, showSettings } = this.props

    if (appIsLoading) {
      return <Loading />
    }

    if (!userIsLoggedIn) {
      return <Login />
    }

    const settings = showSettings ? <Settings /> : null

    const App = styled.div`
      display: flex;
      flex-direction: column;
      align-items: stretch;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${props => props.theme.map};
    `

    return (
      <App>
        <Header />
        <Switch>
          <Route exact path="/" component={Sessions} />
          <Route path="/g/:id/" component={Game} />
        </Switch>
        { settings }
      </App>
    )
  }
}

const mapStateToProps = (state: State) => {
  return {
    appIsLoading: state.ui.appIsLoading,
    userIsLoggedIn: state.ui.userIsLoggedIn,
    theme: themes[state.user.preferences.theme],
    showSettings: state.ui.showSettings,
    location: state.router.location
  }
}

export default connect(mapStateToProps)(App)
