// @flow
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { hot } from 'react-hot-loader'
import { withRouter, Route, Switch } from 'react-router'
import ErrorBoundary from 'react-error-boundary'
import ErrorFallback from './components/error'
import RequireUser from './components/requireUser'
import UserThemeProvider from './components/userThemeProvider'
import Game from './pages/Game'
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import ResetPassword from './pages/ResetPassword'
import Sessions from './pages/Sessions'
import Settings from './pages/Settings'
import { light as lightTheme } from './styles/themes'

const Entry = () => (
  <ThemeProvider theme={lightTheme}>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Switch>
        <Route exact path="/" component={Home} />(
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot_password" component={ResetPassword} />
        <RequireUser>
          {() => (
            <UserThemeProvider>
              <Switch>
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/sessions" component={Sessions} />
                <Route exact path="/g/:name/:id" component={Game} />
              </Switch>
            </UserThemeProvider>
          )}
        </RequireUser>
      </Switch>
    </ErrorBoundary>
  </ThemeProvider>
)

export default hot(module)(withRouter(Entry))
