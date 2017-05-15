/* @flow */
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { put, takeEvery } from 'redux-saga/effects'
import { hydrateUserProfile } from 'actions'

function * loadUserProfile (): Generator<*, *, *> {
  const currentUser = firebase.auth().currentUser
  const photoURL = currentUser.photoURL
  const displayName = currentUser.displayName || currentUser.email

  let user = {
    displayName,
    photoURL
  }

  yield put(hydrateUserProfile(user))
}

export default function * receiveMessages (): Generator<*, *, *> {
  // Wait for user auth to complete
  yield takeEvery('USER_LOGGED_IN', loadUserProfile)
}
