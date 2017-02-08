/* @flow */
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import type { State } from 'types'
import type { Action } from 'actions/types'
import { receivePreferences, loadUserProfile } from 'actions'

export default class UserManager {
  store: Object

  constructor (store: Object) {
    this.store = store
    this.loadPreferences()
    this.loadProfile()
  }

  loadPreferences () {
    const hydratePreferences = prefs => this.store.dispatch(receivePreferences(prefs))
    const uid = firebase.auth().currentUser.uid
    firebase.database().ref(`prefs/${uid}`).once('value')
      .then(prefs => {
        hydratePreferences(prefs.val())
      })
      .catch(e => console.error(e))
  }

  savePreferences () {
    const uid = firebase.auth().currentUser.uid
    const state: State = this.store.getState()
    firebase.database().ref(`prefs/${uid}`)
      .set(state.user.preferences)
      .then(() => {})
      .catch(e => console.error(e))
  }

  loadProfile () {
    const { displayName, photoURL } = firebase.auth().currentUser
    let user = {
      displayName,
      photoURL
    }

    this.store.dispatch(loadUserProfile(user))
  }

  updateProfile (action: Action) {
    if (action.type === 'UPDATE_USER_PROFILE') {
      firebase.auth().currentUser
        .updateProfile({
          displayName: action.user.displayName
        })
        .then(() => {})
        .catch(e => console.error(e))
    }
  }
}
