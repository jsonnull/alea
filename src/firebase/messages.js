/* @flow */
import * as firebase from 'firebase'
import type { State, Message, FirebaseMessage } from '../types'
import type { Action } from '../actions/types'
import { receiveMessage } from '../actions/'

export default class MessagesManager {
  messagesRef: Object
  store: Object

  constructor (store: Object) {
    this.store = store
    this.loadMessages()
  }

  addMessageToStore(message: Message) {
    this.store.dispatch(receiveMessage(message))
  }

  loadMessages () {
    // Reference to the /messages/ database path
    this.messagesRef = firebase.database().ref('messages')
    // Make sure we remove all previous listeners
    this.messagesRef.off()

    const setMessage = data => {
      const { name, text, result, timestamp } = data.val()
      const message: Message = {
        key: data.key,
        from: name,
        text,
        result,
        timestamp
      }
      this.addMessageToStore(message)
    }

    this.messagesRef.limitToLast(12).on('child_added', setMessage)
    // this.messagesRef.limitToLast(12).on('child_changed', setMessage)
  }

  sendMessage (state: State, action: Action) {
    if (action.type === 'SEND_MESSAGE') { // needed for flow type-checking to pass
      const { text, result = null } = action

      const message: FirebaseMessage = {
        name: state.user.profile.displayName,
        text,
        result,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      }

      this.messagesRef
        .push(message)
        .then(() => {})
        .catch(e => console.error(e))
    }
  }
}
