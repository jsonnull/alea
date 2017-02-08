/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
import sidebarStyles from '../style.css'
import styles from './style.css'

type Props = {
  name: string
}

class Session extends React.Component {
  props: Props

  render () {
    return (
      <div className={ sidebarStyles.container }>
        <Header>{ this.props.name }</Header>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({
    name: state.session.name
  }, ownProps)
}

export default connect(mapStateToProps)(Session)
