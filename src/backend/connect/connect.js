import React from 'react'
import Firebase from '../firebase'

function firebaseInject (WrappedComponent) {
  class FirebaseInjector extends React.Component {
    render () {
      return <WrappedComponent firebase={this.context.firebase} {...this.props} />
    }
  }

  FirebaseInjector.contextTypes = { firebase: React.PropTypes.object }

  return FirebaseInjector
}

export default firebaseInject
