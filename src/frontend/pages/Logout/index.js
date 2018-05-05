// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { USER_LOGGED_OUT } from 'frontend/actions/types'
import performLogout from 'frontend/firebase/logout'

type Props = {
  logout: Function
}
class Logout extends React.Component<Props> {
  componentDidMount() {
    performLogout()
    this.props.logout()
  }

  render() {
    return <Redirect to="/" />
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  logout: () => dispatch({ type: USER_LOGGED_OUT })
})

export default connect(null, mapDispatchToProps)(Logout)
