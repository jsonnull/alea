/* @flow */
import type { Action } from 'actions/types'

export type UserDataState = {
  currentSession: ?string,
  sessions: Array<any>
}

const initialState = {
  currentSession: null,
  sessions: []
}

export default function reducer (state: UserDataState = initialState, action: Action) {
  switch (action.type) {
    case 'HYDRATE_USER_DATA':
      return { ...state, ...action.user }
    case 'HYDRATE_SESSION_META':
      const sessionMeta = action.sessions
      return {
        ...state,
        sessions: state.sessions.map(session => ({
          ...session,
          ...sessionMeta.find(meta => meta.sessionId === session.sessionId)
        }))
      }
    default:
      return state
  }
}
