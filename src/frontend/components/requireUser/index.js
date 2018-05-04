// @flow
import * as React from 'react'
import { compose } from 'recompose'
import { Redirect, withRouter } from 'react-router'
import { connect } from 'react-redux'
import type { State } from 'frontend/store'
import Loading from 'frontend/components/Loading'

type Props = {
  initialAuthFinished: boolean,
  userIsLoggedIn: boolean,
  location: { pathname: string },
  children?: Function
}

const RequireUser = (props: Props) => {
  const { initialAuthFinished, userIsLoggedIn, children } = props

  if (!initialAuthFinished) {
    return <Loading />
  }

  if (initialAuthFinished && !userIsLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            from: props.location.pathname
          }
        }}
      />
    )
  }

  if (!children) {
    return null
  }

  return children()
}

const mapStateToProps = (state: State) => ({
  initialAuthFinished: state.ui.initialAuthFinished,
  userIsLoggedIn: state.ui.userIsLoggedIn
})

export default compose(connect(mapStateToProps, {}), withRouter)(RequireUser)
