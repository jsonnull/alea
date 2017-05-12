/* @flow */
import type { Action } from 'actions/types'
import type { SessionInfo } from 'types'

// TODO: Fix add sessions type
export type UserDataState = {
  currentSession: ?string,
  userSessions: {
    [key: string]: SessionInfo
  }
}

const initialState = {
  currentSession: null,
  userSessions: {}
}

export default function reducer (state: UserDataState = initialState, action: Action) {
  switch (action.type) {
    case 'HYDRATE_USER_DATA':
      return { ...state, ...action.user }
    case 'HYDRATE_SESSION_META':
      const { meta, userSessionId } = action
      return {
        ...state,
        userSessions: {
          ...state.userSessions,
          [userSessionId]: {
            ...state.userSessions[userSessionId],
            meta: { ...meta }
          }
        }
      }
    default:
      return state
  }
}
