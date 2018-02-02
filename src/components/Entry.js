// @flow
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Login from '../containers/Login'
import App from '../containers/App'
import Home from './Home'

export type Props = {
  userIsLoggedIn: boolean,
  location: Object
}
class Entry extends React.Component<Props> {
  render() {
    const { userIsLoggedIn } = this.props

    return (
      <Switch>
        <Route
          exact
          path="/login"
          render={() => (userIsLoggedIn ? <Redirect to="/" /> : <Login />)}
        />
        <Route
          exact
          path="/"
          render={() => (userIsLoggedIn ? <App /> : <Home />)}
        />
      </Switch>
    )
  }
}

export default Entry
