// @flow
import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { connect } from 'react-redux'
import styled from 'styled-components'
import type { State } from '../store'
import Sessions from '../containers/Sessions'
import Chat from '../containers/Chat'
import Map from '../containers/Map'
import Sidebar from '../containers/Sidebar'
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
  userIsLoggedIn: boolean,
  location: Object
}
export class App extends React.Component<Props> {
  render() {
    const { appIsLoading, userIsLoggedIn } = this.props

    if (!userIsLoggedIn) {
      return <Redirect to="/login" />
    }

    if (appIsLoading) {
      return <Loading />
    }

    return (
      <Container>
        <Switch>
          <Route exact path="/sessions" component={Sessions} />
          <Route path="/g/:name/:id" component={Game} />
        </Switch>
      </Container>
    )
  }
}

const mapStateToProps = (state: State): Props => ({
  appIsLoading: state.ui.appIsLoading,
  userIsLoggedIn: state.ui.userIsLoggedIn,
  location: state.router.location
})

export default connect(mapStateToProps)(App)
