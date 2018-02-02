// @flow
import React from 'react'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'
import { Redirect, Route, Switch } from 'react-router'
import type { State } from '../store'
import Login from './Login'
import App from './App'
import Home from './Home'

type Props = {
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
          render={() =>
            userIsLoggedIn ? <Redirect to="/sessions" /> : <Login />}
        />
        <Route exact path="/" component={Home} />
        <Route component={App} />
      </Switch>
    )
  }
}

const mapStateToProps = (state: State): Props => ({
  userIsLoggedIn: state.ui.userIsLoggedIn,
  location: state.router.location
})

const Container = connect(mapStateToProps)(Entry)

export default hot(module)(Container)
