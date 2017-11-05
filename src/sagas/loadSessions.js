// @flow
import firebase from '@firebase/app'
import '@firebase/database'
import '@firebase/auth'
import { put, takeEvery } from 'redux-saga/effects'
import { hydrateUserData } from 'actions'
import type { UserDataState } from 'reducers/user/data'

const normalizeUserData = (userData: ?Object): ?UserDataState => {
  if (!userData) {
    return null
  }

  const { sessions } = userData

  for (let key in sessions) {
    if (sessions.hasOwnProperty(key)) {
      const sessionId = sessions[key]
      sessions[key] = { sessionId }
    }
  }

  return {
    userSessions: sessions
  }
}

function* loadSessions(): Generator<*, *, *> {
  const uid = firebase.auth().currentUser.uid
  const userDataRef = firebase.database().ref(`users/${uid}`)

  const user = yield userDataRef.once('value')

  let normalizedData: ?UserDataState = normalizeUserData(user.val())
  if (normalizedData) {
    yield put(hydrateUserData(normalizedData))
  }
}

export default function* loadSessionWatcher(): Generator<*, *, *> {
  // Wait for user auth to complete
  yield takeEvery('USER_LOGGED_IN', loadSessions)
}
