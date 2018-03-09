// @flow
import { createSelector } from 'reselect'
import sessionIdSelector from './sessionId'
import type { State } from '../store'
import type { SessionInfo } from '../types'

const sessionsSelector = (state: State) => state.sessions

const sessionNameSelector = createSelector(
  sessionIdSelector,
  sessionsSelector,
  (id: ?string, sessions: ?Array<SessionInfo>) => {
    if (!id || !sessions) {
      return 'Session name could not be found'
    }

    for (let i = 0; i < sessions.length; i++) {
      const session = sessions[i]
      if (session.id === id) {
        if (session && session.meta) {
          return session.meta.name
        }
      }
    }

    return 'Session name could not be found'
  }
)

export default sessionNameSelector
