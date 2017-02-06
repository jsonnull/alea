import React from 'react'
import { connect } from 'react-redux'
import styles from './style.css'

class Session extends React.Component {
  render () {
    return (
      <h1 className={ this.props.headerStyle }>{ this.props.name }</h1>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({
    name: state.session.name
  }, ownProps)
}

export default connect(mapStateToProps)(Session)
