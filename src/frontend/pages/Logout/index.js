// @flow
import * as React from 'react'
import { Redirect } from 'react-router-dom'
import performLogout from 'frontend/firebase/logout'

class Logout extends React.Component<*> {
  componentDidMount() {
    performLogout()
  }

  render() {
    return <Redirect to="/" />
  }
}

export default Logout
