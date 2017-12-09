// @flow
import { take, put, call, select } from 'redux-saga/effects'
import { changeDisplayName } from 'actions'
import { CHANGE_DISPLAY_NAME } from 'actions/types'

export default function* saveUserProfile(
  getCurrentUserEmail: () => string,
  saveProfile: Function
): Generator<*, *, *> {
  while (true) {
    const action = yield take(CHANGE_DISPLAY_NAME)
    const profile = yield select(state => state.user.profile)
    if (profile.displayName === '') {
      const email = yield call(getCurrentUserEmail)
      yield put(changeDisplayName(action.id, email))
    } else {
      const profileToSave = {
        displayName: profile.displayName
      }
      yield call(saveProfile, profileToSave)
    }
  }
}
