// @flow
import firebase from '@firebase/app'
import '@firebase/database'
import { eventChannel } from 'redux-saga'
import { take, put, select, fork, cancel, cancelled } from 'redux-saga/effects'
import currentSessionId from 'selectors/sessionId'
import { hydrateSession } from 'actions'

function createSubscription(sessionId: string) {
  console.log(`subscribing to session ${sessionId}`)

  const subscription = eventChannel(emit => {
    const ref = firebase.database().ref(`sessions/${sessionId}`)

    ref.on('value', sessionSnapshot => {
      emit(sessionSnapshot.val())
    })

    return () => {
      ref.off()
    }
  })

  return subscription
}

function* subscribeToSession(sessionId): Generator<*, *, *> {
  const subscription = createSubscription(sessionId)

  try {
    while (true) {
      const sessionData = yield take(subscription)
      yield put(hydrateSession(sessionData))
    }
  } finally {
    if (yield cancelled()) {
      console.log('closing subscription')
      subscription.close()
    }
  }
}

export default function* loadCurrentSession(): Generator<*, *, *> {
  let currentSubscription = null
  let sessionId = null

  while (true) {
    const action = yield take([
      'USER_LOGGED_IN',
      'SWITCH_TO_SESSION',
      'USER_LOGGED_OUT'
    ])

    // Find out what the new session id is
    let newSessionId = yield select(currentSessionId)
    if (action.type === 'SWITCH_TO_SESSION') {
      newSessionId = action.sessionId
    }

    // Should we switch?
    const isNewSession = sessionId !== newSessionId

    if (action.type === 'USER_LOGGED_OUT') {
      yield cancel(currentSubscription)
    } else if (isNewSession) {
      // If the user has switched to a different session, change subscriptions
      if (currentSubscription !== null) {
        yield cancel(currentSubscription)
      }

      currentSubscription = yield fork(subscribeToSession, newSessionId)
    }

    // Save for next comparison
    sessionId = newSessionId
  }
}
