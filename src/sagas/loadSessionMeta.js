/* @flow */
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { all, select, call, put, takeLatest } from 'redux-saga/effects'
import { hydrateSessionMeta } from 'actions'

function * loadSessionMeta (userSessionId: string, sessionId: string): Generator<*, *, *> {
  const getMeta = () => new Promise((resolve, reject) => {
    firebase.database().ref(`sessions/${sessionId}/name`).once('value')
      .then(response => resolve({
        name: response.val()
      }))
      .catch(reject)
  })

  const meta = yield call(getMeta)
  yield put(hydrateSessionMeta(userSessionId, meta))
}

function * loadAllMeta (): Generator<*, *, *> {
  const sessions = yield select(state => state.user.data.userSessions)

  yield all(
    Object.keys(sessions).map(key => call(loadSessionMeta, key, sessions[key].sessionId))
  )
}

export default function * loadMeta (): Generator<*, *, *> {
  yield takeLatest('HYDRATE_USER_DATA', loadAllMeta)
}
