/* @flow */
import auth from 'firebase/auth'
import type { Action } from 'actions/types'

export default class AuthManager {
  static login (action: Action) {
    if (action.type === 'LOGIN') {
      const { email, password } = action

      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {})
        .catch(e => console.error(e))
    }
  }

  static logout () {
    auth()
      .signOut()
      .then(() => {})
      .catch(e => console.error(e))
  }
}
