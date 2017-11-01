/* @flow */
import firebase from '@firebase/app'
import '@firebase/auth'
import { put, call, takeEvery } from 'redux-saga/effects'

type LoginAction = {
  type: 'LOGIN',
  email: string,
  password: string
}

function* loginWithEmailAndPassword(action: LoginAction): Generator<*, *, *> {
  const signIn = () =>
    new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(action.email, action.password)
        .then(resolve)
        .catch(reject)
    })
  try {
    const user = yield call(signIn)
    console.log(user)
    yield put({ type: 'USER_LOGGED_IN' })
  } catch (error) {
    console.log('there was an error')
  }
}

export default function* login(): Generator<*, *, *> {
  yield takeEvery('LOGIN', loginWithEmailAndPassword)
}
