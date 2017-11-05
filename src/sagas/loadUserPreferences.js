// @flow
import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/database'
import { call, put, takeEvery } from 'redux-saga/effects'
import { hydratePreferences } from 'actions'

function* loadUserPreferences(): Generator<*, *, *> {
  const uid = firebase.auth().currentUser.uid
  const ref = firebase.database().ref(`prefs/${uid}`)
  const loadPrefs = () =>
    new Promise((resolve, reject) => {
      ref
        .once('value')
        .then(data => resolve(data.val()))
        .catch(reject)
    })
  const prefs = yield call(loadPrefs)
  yield put(hydratePreferences(prefs))
  yield put({ type: 'APP_FINISHED_LOADING' })
}

export default function* loadPreferences(): Generator<*, *, *> {
  // Wait for user auth to complete
  yield takeEvery('USER_LOGGED_IN', loadUserPreferences)
}
