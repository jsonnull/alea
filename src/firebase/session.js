/* @flow */
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import type { State } from 'store'
import type { Action } from 'actions/types'
import {
  hydrateSession,
  hydrateSessionMeta,
  userAddSession
} from 'actions'

export default class SessionManager {
  sessionRef: Object
  store: Object

  constructor (store: Object) {
    this.store = store
  }

  static init (store: Object): SessionManager {
    let instance = new SessionManager(store)

    instance.loadSession()

    return instance
  }

  // Creates a new session with the current user as owner
  createSession () {
    let sessionsRef = firebase.database().ref('sessions')

    let thenable = sessionsRef.push({
      owner: firebase.auth().currentUser.uid,
      name: 'My new game'
    })

    let sessionId = thenable.key
    this.store.dispatch(userAddSession(sessionId))

    thenable
      // Session creation is complete
      .then(session => this.loadSession())
      .catch(e => console.error(e))
  }

  loadSession () {
    const hydrate = session => {
      this.store.dispatch(hydrateSession(session))
    }
    const state = this.store.getState()
    const sessionId = state.user.data.currentSession

    if (sessionId) {
      this.sessionRef = firebase.database().ref(`sessions/${sessionId}`)
      this.sessionRef.off()
      this.sessionRef.on('value', sessionSnapshot => {
        hydrate(sessionSnapshot.val())
      })
    }
  }

  updateSession (state: State, action: Action) {
    if (action.type === 'UPDATE_SESSION') { 
    }
  }

  static async getSessionInfo(sessionId: string) {
    let info = await new Promise((resolve, reject) => {
      firebase.database().ref(`sessions/${sessionId}/name`).once('value')
        .then(response => resolve({
          name: response.val(), sessionId
        }))
        .catch(reject)
    })
    return info
  }
}
