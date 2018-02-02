// @flow
import React from 'react'
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import type { State } from '../store'
import Header from '../containers/Header'
import Sessions from '../containers/Sessions'
import Settings from '../containers/Settings'
import Chat from '../containers/Chat'
import Map from '../containers/Map'
import Sidebar from '../containers/Sidebar'
import * as themes from '../styles/themes'
import { CONSTS } from '../styles/common'
import Loading from '../components/Loading'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${props => props.theme.map};
`

const GameInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex: 1;
  position: absolute;
  top: ${CONSTS.headerHeight};
  right: 0;
  bottom: 0;
  left: 0;
`

const Game = () => (
  <GameInner>
    <Sidebar />
    <Map />
    <Chat />
  </GameInner>
)

type Props = {
  appIsLoading: boolean,
  location: Object,
  theme: Object
}
export class App extends React.Component<Props> {
  render() {
    const { appIsLoading, theme } = this.props

    if (appIsLoading) {
      return (
        <ThemeProvider theme={themes['light']}>
          <Loading />
        </ThemeProvider>
      )
    }

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Switch>
            <Route exact path="/sessions" component={Sessions} />
            <Route path="/g/:name/:id" component={Game} />
          </Switch>
          <Settings />
        </Container>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = (state: State): Props => ({
  appIsLoading: state.ui.appIsLoading,
  theme: themes[state.preferences.theme],
  location: state.router.location
})

export default connect(mapStateToProps)(App)
