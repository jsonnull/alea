// @flow
import type { Saga } from 'redux-saga'
import { call, put, select, take } from 'redux-saga/effects'
import { changeDisplayName } from '../actions'
import { CHANGE_DISPLAY_NAME } from '../actions/types'
import currentUser from '../selectors/currentUser'
import getCurrentUserEmail from '../firebase/getCurrentUserEmail'
import saveProfile from '../firebase/saveProfile'
import type { UserProfile } from '../types'

export default function* saveUserProfile(): Saga<void> {
  while (true) {
    yield take(CHANGE_DISPLAY_NAME)
    const profile = yield select(currentUser)
    if (profile.displayName === '') {
      const email = yield call(getCurrentUserEmail)
      yield put(changeDisplayName(email))
    } else {
      const profileToSave: UserProfile = {
        ...profile,
        displayName: profile.displayName
      }
      yield call(saveProfile, profileToSave)
    }
  }
}
