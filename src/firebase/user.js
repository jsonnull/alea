/* @flow */
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import SessionManager from './session'
import type { State } from 'store'
import type { Action } from 'actions/types'
import {
  hydrateUserData,
  hydratePreferences,
  hydrateUserProfile,
  hydrateSessionMeta,
  changeSidebarTab
} from 'actions'

export default class UserManager {
  store: Object
  userDataRef: Object

  constructor (store: Object) {
    this.store = store
    const uid = firebase.auth().currentUser.uid
    this.userDataRef = firebase.database().ref(`users/${uid}`)
    this.loadPreferences()
    this.loadProfile()
  }

  static async init (store: Object): Promise<UserManager> {
    let instance = new UserManager(store)

    // Watches data and returns when initial data set is retrieved
    await instance.loadData()

    instance.loadSessionInfo()

    return instance
  }

  loadPreferences () {
    const hydrate = prefs => this.store.dispatch(hydratePreferences(prefs))
    const uid = firebase.auth().currentUser.uid
    firebase.database().ref(`prefs/${uid}`).once('value')
      .then(prefs => hydrate(prefs.val()))
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

    this.store.dispatch(hydrateUserProfile(user))
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

  async loadData (): Promise<?Object> {
    const hydrate = data => this.store.dispatch(hydrateUserData(data))
    const uid = firebase.auth().currentUser.uid

    // Make sure we remove all previous listeners
    this.userDataRef.off()

    let userData = await new Promise(resolve => {
      this.userDataRef.on('value', user => {
        let normalizedData = this.normalizeUserData(user.val())
        if (normalizedData) {
          hydrate(normalizedData)
        }
        resolve(normalizedData)
      })
    })

    return userData
  }

  normalizeUserData (userData: ?Object): ?Object {
    if (!userData) {
      return null
    }

    // Sessions map to array
    const mapSessionsToArray = (sessions) => {
      let arr = []
      for (let key in sessions) {
        if (sessions.hasOwnProperty(key)) {
          arr.push({key: key, sessionId: sessions[key]})
        }
      }
      return arr
    }

    userData.sessions = mapSessionsToArray(userData.sessions)

    return userData
  } 

  // Add a session to a user's profile
  addSession (action: Action) {
    if (action.type === 'USER_ADD_SESSION') {
      const goToSessionTab = () => this.store.dispatch(changeSidebarTab('Session'))
      const uid = firebase.auth().currentUser.uid
      const { sessionId } = action

      let userSessionId = firebase.database().ref(`users/${uid}/sessions`).push().key
      let updates = {}
      updates[`users/${uid}/currentSession`] = sessionId
      updates[`users/${uid}/sessions/${userSessionId}`] = sessionId

      firebase.database().ref().update(updates)
        .then(goToSessionTab)
        .catch(e => console.error(e))
    }
  }

  setSession (action: Action) {
    if (action.type === 'USER_SET_SESSION') {
      const uid = firebase.auth().currentUser.uid
      const { sessionId } = action

      let updates = {}
      updates[`users/${uid}/currentSession`] = sessionId

      firebase.database().ref().update(updates)
        .then(() => {})
        .catch(e => console.error(e))
    }
  }

  async loadSessionInfo () {
    const sessions = this.store.getState().user.data.sessions
    let collection = await Promise.all([
      ...sessions.map(session => SessionManager.getSessionInfo(session.sessionId))
    ])

    this.store.dispatch(hydrateSessionMeta(collection))
  }
}
