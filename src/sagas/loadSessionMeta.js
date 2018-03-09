// @flow
import type { Saga } from 'redux-saga'
import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { hydrateSessionMeta } from '../actions'
import { HYDRATE_SESSIONS_LIST } from '../actions/types'
import getSessionMeta from '../firebase/getSessionMeta'

export function* loadSessionMeta(sessionId: string): Saga<void> {
  const meta = yield call(getSessionMeta, sessionId)
  yield put(hydrateSessionMeta(sessionId, meta))
}

export function* loadAllMeta(): Saga<void> {
  const sessions = yield select(state => state.sessions)
  yield all(sessions.map(session => call(loadSessionMeta, session.id)))
}

export default function* loadMeta(): Saga<void> {
  yield takeLatest(HYDRATE_SESSIONS_LIST, loadAllMeta)
}
