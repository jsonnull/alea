/* @flow */
import type { SessionMeta, Message, Theme, Tab } from 'types'
import type { UserProfileState } from 'reducers/user/profile'
import type { UserPreferencesState } from 'reducers/user/preferences'
import type { UserDataState } from 'reducers/user/data'
import type { SessionState } from 'reducers/session'

export type Action =
  /* Messages */
    { type: 'RECEIVE_MESSAGE', message: Message }
  /* UI */
  | { type: 'SET_LOADING', appIsLoading: boolean }
  | { type: 'SET_USER_LOGGED_IN', userIsLoggedIn: boolean }
  /* User Profile */
  | { type: 'HYDRATE_USER_PROFILE', user: UserProfileState }
  | { type: 'UPDATE_USER_PROFILE', user: UserProfileState }
  /* User Preferences */
  | { type: 'HYDRATE_PREFERENCES', prefs: UserPreferencesState }
  | { type: 'CHANGE_THEME', theme: Theme }
  | { type: 'TOGGLE_CHAT_PIN' }
  /* User Data */
  | { type: 'HYDRATE_USER_DATA', user: UserDataState }
  | { type: 'HYDRATE_SESSION_META', userSessionId: string, meta: SessionMeta }
  /* Session */
  | { type: 'HYDRATE_SESSION', session: SessionState }
  | { type: 'SWITCH_TO_SESSION', sessionId: string }
  /* Sidebar */
  | { type: 'CHANGE_SIDEBAR_TAB', tab: Tab }
