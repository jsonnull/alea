// @flow
import * as React from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import type { State } from 'frontend/store'
import Loading from 'frontend/components/Loading'

type Props = {
  component: React.ComponentType<*>,
  initialAuthFinished: boolean
}

const WaitForAuth = (outerProps: Props) => {
  const { component: Component, initialAuthFinished, ...rest } = outerProps

  return (
    <Route
      {...rest}
      render={props => {
        if (!initialAuthFinished) {
          return <Loading />
        }

        return <Component {...props} />
      }}
    />
  )
}

const mapStateToProps = (state: State) => ({
  initialAuthFinished: state.ui.initialAuthFinished
})

export default connect(mapStateToProps, {})(WaitForAuth)
