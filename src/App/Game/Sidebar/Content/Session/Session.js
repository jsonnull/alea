/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import type { State } from 'store'

type Props = {
  name: string
}

class Session extends React.Component {
  props: Props

  render () {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = (state: State) => {
}

export default connect(mapStateToProps)(Session)
