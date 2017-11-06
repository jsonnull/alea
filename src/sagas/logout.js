// @flow
import firebase from '@firebase/app'
import '@firebase/auth'
import { put, call, takeEvery } from 'redux-saga/effects'

function* logoutCurrentUser(): Generator<*, *, *> {
  const signOut = () =>
    new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(resolve)
        .catch(reject)
    })
  yield call(signOut)
  yield put({ type: 'USER_LOGGED_OUT' })
}

export default function* logout(): Generator<*, *, *> {
  yield takeEvery('PERFORM_USER_LOGOUT', logoutCurrentUser)
}
