import React from 'react'
import { connect } from 'react-redux'
import styles from './style.css'

class Session extends React.Component {
  render () {
    return (
      <div className={ styles.container }>
        <h1 className={ styles.header }>{ this.props.name }</h1>
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
