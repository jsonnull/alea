// @flow
import firebase from '@firebase/app'
import '@firebase/database'
import '@firebase/auth'
import { call, select, takeEvery } from 'redux-saga/effects'

function* saveLatestPreferences(): Generator<*, *, *> {
  const uid = firebase.auth().currentUser.uid
  const ref = firebase.database().ref(`prefs/${uid}`)
  const savePreferences = preferences => ref.set(preferences)
  const preferences = yield select(state => state.user.preferences)
  yield call(savePreferences, preferences)
}

export default function* saveUserPreferences(): Generator<*, *, *> {
  yield takeEvery(['CHANGE_THEME', 'TOGGLE_CHAT_PIN'], saveLatestPreferences)
}
