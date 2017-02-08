import React from 'react'
import { connect } from 'react-redux'
import sidebarStyles from '../style.css'
import styles from './style.css'

class Session extends React.Component {
  render () {
    return (
      <h1 className={ sidebarStyles.header }>{ this.props.name }</h1>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({
    name: state.session.name
  }, ownProps)
}

export default connect(mapStateToProps)(Session)
