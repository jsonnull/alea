/* @flow */
import { Component, PropTypes, Children } from 'react'
import Firebase from '../firebase'

type Props = {
  firebase: Firebase,
  children: any
}

const contextTypes = {
  firebase: PropTypes.object
}

class FirebaseProvider extends Component<*, Props, *> {
  getChildContext () {
    return {
      firebase: this.props.firebase
    }
  }

  render () {
    return Children.only(this.props.children) 
  }
}
FirebaseProvider.childContextTypes = contextTypes

export default FirebaseProvider
