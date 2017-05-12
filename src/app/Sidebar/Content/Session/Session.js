/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
import sidebarStyles from '../style.css'
import type { State } from 'store'

type Props = {
  name: string
}

class Session extends React.Component {
  props: Props

  render () {
    return (
      <div className={ sidebarStyles.inner }>
        <Header>{ this.props.name }</Header>
      </div>
    )
  }
}

const mapStateToProps = (state: State, ownProps) => {
  return Object.assign({
    name: state.session.name
  }, ownProps)
}

export default connect(mapStateToProps)(Session)
