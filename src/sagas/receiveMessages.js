// @flow
import firebase from '@firebase/app'
import '@firebase/database'
import { eventChannel } from 'redux-saga'
import { put, take, fork, cancel, cancelled } from 'redux-saga/effects'
import { receiveMessage } from 'actions'
import type { Message, FirebaseMessage } from 'types'

function messageFromFirebaseData(data: Object): Message {
  let firebaseMessage: FirebaseMessage = data.val()
  const { name, text, result, timestamp } = firebaseMessage

  const message: Message = {
    key: data.key,
    from: name,
    text,
    result,
    timestamp
  }

  return message
}

function createMessageSubscription() {
  const listener = eventChannel(emit => {
    const ref = firebase.database().ref('messages')
    ref
      .orderByChild('timestamp')
      .limitToLast(12)
      .on('child_added', emit)

    return () => {
      ref.off()
    }
  })

  return listener
}

function* subscribeToMessages(): Generator<*, *, *> {
  const subscription = createMessageSubscription()

  try {
    while (true) {
      const data = yield take(subscription)
      const message = messageFromFirebaseData(data)
      yield put(receiveMessage(message))
    }
  } finally {
    if (yield cancelled()) {
      subscription.close()
    }
  }
}

export default function* receiveMessages(): Generator<*, *, *> {
  let currentSubscription = null

  while (true) {
    // Listen for changes on user auth
    const action = yield take(['USER_LOGGED_IN', 'USER_LOGGED_OUT'])

    if (action.type === 'USER_LOGGED_IN') {
      // If user is logged in, create a subscription to messages
      currentSubscription = yield fork(subscribeToMessages)
    } else if (action.type === 'USER_LOGGED_OUT') {
      // If user is logged out, cancel the subscription
      if (currentSubscription) {
        yield cancel(currentSubscription)
        currentSubscription = null
      }
    }
  }
}
