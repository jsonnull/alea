// @flow
import type { Saga } from 'redux-saga'
import { call, put, select, take } from 'redux-saga/effects'
import { changeDisplayName } from '../actions'
import { CHANGE_DISPLAY_NAME } from '../actions/types'
import currentUser from '../selectors/currentUser'
import saveProfile from '../firebase/saveProfile'
import type { UserProfile } from '../types'

export default function* saveUserProfile(): Saga<void> {
  while (true) {
    yield take(CHANGE_DISPLAY_NAME)
    const profile = yield select(currentUser)
    if (profile.displayName === '') {
      const email = profile.email
      yield put(changeDisplayName(email))
    } else {
      const profileToSave: UserProfile = {
        photoURL: profile.photoURL,
        displayName: profile.displayName
      }
      yield call(saveProfile, profileToSave)
    }
  }
}
