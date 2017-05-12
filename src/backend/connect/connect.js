import React from 'react'
import PropTypes from 'prop-types'

function firebaseInject (WrappedComponent) {
  class FirebaseInjector extends React.Component {
    render () {
      return <WrappedComponent firebase={this.context.firebase} {...this.props} />
    }
  }

  FirebaseInjector.contextTypes = { firebase: PropTypes.object }

  return FirebaseInjector
}

export default firebaseInject
