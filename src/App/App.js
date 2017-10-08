/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'
import styled, { ThemeProvider } from 'styled-components'
import Loading from 'components/Loading'
import Login from 'containers/Login'
import Game from './Game'
import Header from '../containers/Header'
import Sessions from './Sessions'
import Settings from '../containers/Settings'
import * as themes from 'styles/themes'
import type { State } from 'store'

type Props = {
  appIsLoading: boolean,
  userIsLoggedIn: boolean,
  showSettings: boolean,
  location: Object,
  theme: Object
}

const Container = styled.div`
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

class App extends React.Component<Props> {
  render() {
    const { appIsLoading, userIsLoggedIn, showSettings, theme } = this.props

    if (appIsLoading) {
      return (
        <ThemeProvider theme={themes['light']}>
          <Loading />
        </ThemeProvider>
      )
    }

    if (!userIsLoggedIn) {
      return (
        <ThemeProvider theme={themes['light']}>
          <Login />
        </ThemeProvider>
      )
    }

    const settings = showSettings ? <Settings /> : null

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Switch>
            <Route exact path="/" component={Sessions} />
            <Route path="/g/:id/" component={Game} />
          </Switch>
          {settings}
        </Container>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = (state: State): Props => ({
  appIsLoading: state.ui.appIsLoading,
  userIsLoggedIn: state.ui.userIsLoggedIn,
  theme: themes[state.user.preferences.theme],
  showSettings: state.ui.showSettings,
  location: state.router.location
})

export default connect(mapStateToProps)(App)
