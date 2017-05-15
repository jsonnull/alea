/* @flow */
import * as firebase from 'firebase/app'
import 'firebase/database'
import { eventChannel } from 'redux-saga'
import { take, put, select, fork, cancel, cancelled } from 'redux-saga/effects'
import currentSessionId from 'selectors/sessionId'
import { hydrateSession } from 'actions'

function createSubscription (sessionId: string) {
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

function * subscribeToSession (sessionId): Generator<*, *, *> {
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

export default function * loadCurrentSession (): Generator<*, *, *> {
  // Wait for user login
  yield take('USER_LOGGED_IN')

  let currentSubscription = null
  let sessionId = yield select(currentSessionId)

  while (true) {
    console.log('listening for events')
    const action = yield take([
      'USER_LOGGED_IN',
      'SWITCH_TO_SESSION'
    ])

    let newSessionId = yield select(currentSessionId)
    // Wait for URL change
    if (action.type === 'SWITCH_TO_SESSION') {
      newSessionId = action.sessionId
    }

    if (newSessionId !== sessionId) {
      console.log('switched, cancelling old sub')
      sessionId = newSessionId
      if (currentSubscription !== null) {
        yield cancel(currentSubscription)
      }

      currentSubscription = yield fork(subscribeToSession, newSessionId)
    }
  }
}
