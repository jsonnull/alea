// @flow
import type { Saga } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import { hydrateSessionsList } from '../actions'
import { USER_LOGGED_IN } from '../actions/types'
import type { SessionsState } from '../reducers/sessions'
import getSessions from '../firebase/getSessions'

export function* loadSessions(): Saga<void> {
  const data: ?SessionsState = yield call(getSessions)

  if (data) {
    yield put(hydrateSessionsList(data))
  }
}

export default function* loadSessionWatcher(): Saga<void> {
  // Wait for user auth to complete
  yield takeEvery(USER_LOGGED_IN, loadSessions)
}
