/* @flow */
import auth from 'firebase/auth'

export default class AuthManager {
  static login (email: string, password: string) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {})
      .catch(e => console.error(e))
  }

  static logout () {
    auth()
      .signOut()
      .then(() => {})
      .catch(e => console.error(e))
  }
}
