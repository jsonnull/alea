// @flow
import React from 'react'
import styled from 'styled-components'
import { hot } from 'react-hot-loader'
import { withRouter, Route, Switch } from 'react-router'
import ErrorBoundary from 'react-error-boundary'
import ErrorFallback from 'frontend/components/error'
import RequireUser from 'frontend/pages/utils/RequireUser'
import { CONSTS } from 'frontend/styles/common'
import ThemeProvider from 'frontend/components/ThemeProvider'
import Header from 'frontend/containers/Header'
import Settings from 'frontend/containers/Settings'
import Sessions from 'frontend/containers/Sessions'
import Game from 'frontend/pages/Game'
import Home from 'frontend/pages/Home'
import Login from 'frontend/pages/Login'
import Logout from 'frontend/pages/Logout'
import ResetPassword from 'frontend/pages/ResetPassword'

const Body = styled.div`
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
  <Body>
    <ThemeProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Header />
        <Inner>
          <Switch>
            <Route exact path="/" component={Home} />(
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgot_password" component={ResetPassword} />
            <RequireUser exact path="/logout" component={Logout} />
            <RequireUser exact path="/settings" component={Settings} />
            <RequireUser exact path="/sessions" component={Sessions} />
            <RequireUser exact path="/g/:name/:id" component={Game} />
          </Switch>
        </Inner>
      </ErrorBoundary>
    </ThemeProvider>
  </Body>
)

export default hot(module)(withRouter(Entry))
