// @flow
import React from 'react'
import styled from 'styled-components'
import { hot } from 'react-hot-loader'
import { withRouter, Route, Switch } from 'react-router'
import RequireUser from './utils/RequireUser'
import WaitForAuth from './utils/WaitForAuth'
import { CONSTS } from 'frontend/styles/common'
import ThemeProvider from 'frontend/components/ThemeProvider'
import Header from 'frontend/containers/Header'
import Settings from 'frontend/containers/Settings'
import Sessions from 'frontend/containers/Sessions'
import Game from './Game'
import Home from './Home'
import Login from './Login'
import ResetPassword from './ResetPassword'

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Inner = styled.div`
  position: absolute;
  top: ${CONSTS.headerHeight};
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: ${props => props.theme.background};
`

const Entry = () => (
  <ThemeProvider>
    <Container>
      <Header />
      <Inner>
        <Switch>
          <Route exact path="/" component={Home} />
          <WaitForAuth exact path="/login" component={Login} />
          <WaitForAuth
            exact
            path="/forgot_password"
            component={ResetPassword}
          />
          <RequireUser exact path="/settings" component={Settings} />
          <RequireUser exact path="/sessions" component={Sessions} />
          <RequireUser exact path="/g/:name/:id" component={Game} />
        </Switch>
      </Inner>
    </Container>
  </ThemeProvider>
)

export default hot(module)(withRouter(Entry))
