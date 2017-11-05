// @flow
import { put, select, take } from 'redux-saga/effects'
import sessionIdSelector from 'selectors/sessionId'
import { changeSidebarTab } from 'actions'

export default function* defaultTab(): Generator<*, *, *> {
  yield take('USER_LOGGED_IN')
  const sessionId = yield select(sessionIdSelector)

  if (sessionId === null) {
    yield put(changeSidebarTab('Sessions'))
  }
}
