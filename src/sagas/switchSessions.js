/* @flow */
import slug from 'slugg'
import { put, select, takeEvery } from 'redux-saga/effects'
import sessionIdSelector from 'selectors/sessionId'
import { push } from 'react-router-redux'
import type { SessionList, SessionInfo } from 'types'

// FIXME: remove duplicate entry elsewhere
function sessionListToArray (sessions: SessionList): Array<SessionInfo> {
  let arr: any = Object.values(sessions)
  arr = (arr: Array<SessionInfo>)
  return arr
}

function * switchToSession (action): Generator<*, *, *> {
  const sessionId = action.sessionId
  const currentSessionId = yield select(sessionIdSelector)

  if (sessionId !== currentSessionId) {
    // Get session name
    const userSessions = yield select(state => state.user.data.userSessions)
    const sessions = sessionListToArray(userSessions)

    // FIXME: Is there some way to remove these if statements?
    const session = sessions.find(el => el.sessionId === sessionId)
    if (session) {
      const meta = session.meta
      if (meta) {
        const sessionName = meta.name
        yield put(push(`/g/${sessionId}/${slug(sessionName)}`))
      }
    }
  }
}

export default function * switchSessions (): Generator<*, *, *> {
  yield takeEvery('SWITCH_TO_SESSION', switchToSession)
}
