/* @flow */
import * as firebase from 'firebase/app'
import 'firebase/database'
import type { Message, MessageResult } from 'types'
import type { State } from 'store'
import type { Action } from 'actions/types'
import { receiveMessage } from 'actions'

/* Messages sent/received by Firebase */
type FirebaseMessage = {
  name: string,
  result: ?MessageResult,
  text: string,
  timestamp: number
}

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
      // tcomb will validate incoming message matches schema
      let firebaseMessage: FirebaseMessage = data.val()
      const { name, text, result, timestamp } = firebaseMessage

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
