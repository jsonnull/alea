/* @flow */
import * as firebase from 'firebase/app'
import 'firebase/database'
import type { State, Message, FirebaseMessage } from '../types'
import type { Action } from 'actions/types'
import { receiveMessage } from 'actions/'

export default class MessagesManager {
  sessionRef: Object
  store: Object

  constructor (store: Object) {
    this.store = store
    this.loadSession()
  }

  loadSession () {
    // Reference to the /messages/ database path
    this.sessionRef = firebase.database().ref(`sessions/${1}`)
    // Make sure we remove all previous listeners
    this.sessionRef.off()

    this.sessionRef.limitToLast(12).on('child_added', console.log)
    // this.messagesRef.limitToLast(12).on('child_changed', setMessage)
  }

  updateSession (state: State, action: Action) {
    if (action.type === 'UPDATE_SESSION') { // needed for flow type-checking to pass
    }
  }
}
