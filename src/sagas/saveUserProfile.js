// @flow
import firebase from '@firebase/app'
import '@firebase/auth'
import { changeDisplayName } from 'actions'
import { put, call, select, takeEvery } from 'redux-saga/effects'

function* saveLatestProfile(): Generator<*, *, *> {
  const profile = yield select(state => state.user.profile)

  if (profile.displayName === '') {
    const email = firebase.auth().currentUser.email
    yield put(changeDisplayName(email))
  } else {
    const profileToSave = {
      displayName: profile.displayName
    }
    const saveProfile = () => {
      firebase
        .auth()
        .currentUser.updateProfile(profileToSave)
        .then(() => {})
        .catch(e => console.error(e))
    }
    yield call(saveProfile)
  }
}

export default function* saveUserProfile(): Generator<*, *, *> {
  yield takeEvery('CHANGE_DISPLAY_NAME', saveLatestProfile)
}
