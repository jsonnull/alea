/* @flow */
import type { Action } from '../actions/types'
import Firebase from '../firebase/'

const firebaseMiddleware = (firebase: Firebase) => (store: Object) => (next: Function) => (action: Action) => {
  // Error on Firebase-y actions if there's no logged-in user
  if (action.type !== 'LOGIN' && action.type !== 'SET_LOADING') {
    if (firebase.auth.currentUser == undefined) {
      console.error('User is not signed in')
      return
    }
  }

  firebase.handleAction(action, store)

  next(action)
}

export default firebaseMiddleware
