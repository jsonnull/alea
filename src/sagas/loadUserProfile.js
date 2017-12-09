// @flow
import { take, call, put } from 'redux-saga/effects'
import { hydrateUserProfile } from 'actions'
import { USER_LOGGED_IN } from 'actions/types'
import type { UserProfile } from 'types'
import type { Action } from 'actions/types'

type GetUserProfile = () => UserProfile

export default function* loadUserProfile(
  getUserProfile: GetUserProfile
): Generator<*, *, *> {
  // Wait for user auth to complete
  while (true) {
    const action = ((yield take(USER_LOGGED_IN): any): Action)
    if (action.type === USER_LOGGED_IN) {
      const user = ((yield call(getUserProfile): any): UserProfile)
      yield put(hydrateUserProfile(action.id, user))
    }
  }
}
