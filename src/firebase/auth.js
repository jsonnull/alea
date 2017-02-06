/* @flow */
import * as firebase from 'firebase'
import type { Action } from '../actions/types'

export default class AuthManager {
  static login (action: Action) {
    if (action.type === 'LOGIN') {
      const { email, password } = action

      firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {})
        .catch(e => console.error(e))
    }
  }

  static logout () {
    firebase.auth()
      .signOut()
      .then(() => {})
      .catch(e => console.error(e))
  }
}
