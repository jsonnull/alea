/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import type { State } from 'store'

type Props = {
  username: string
}

class CurrentUser extends React.Component<*, Props, *> {
  render () {
    const { username } = this.props

    return (
      <div>
        { username }
      </div>
    )
  }
}

const mapStateToProps = (state: State, ownProps) => ({
  username: state.user.profile.displayName
})

export default connect(mapStateToProps)(CurrentUser)
