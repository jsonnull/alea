/* @flow */
import type { Theme, MessageResult, Tab } from 'types'
import t from 'tcomb'

const ReduxActionString = t.refinement(t.String, (s) => s.indexOf('@@redux/') === 0, 'ReduxActionString')
type ReduxInitAction = { type: ReduxActionString }

export type Action = ReduxInitAction
  /* Messages */
  | { type: 'RECEIVE_MESSAGE', key: string, from: string, text: string, result: ?MessageResult, timestamp: number }
  /* UI */
  | { type: 'SET_LOADING', appIsLoading: boolean }
  | { type: 'SET_USER_LOGGED_IN' }
  /* User Profile */
  | { type: 'HYDRATE_USER_PROFILE', user: Object }
  | { type: 'UPDATE_USER_PROFILE', user: Object }
  /* User Preferences */
  | { type: 'HYDRATE_PREFERENCES', prefs: Object }
  | { type: 'CHANGE_THEME', theme: Theme }
  | { type: 'TOGGLE_CHAT_PIN' }
  /* User Data */
  | { type: 'HYDRATE_USER_DATA', user: Object }
  | { type: 'HYDRATE_SESSION_META', sessions: Array<Object> }
  /* Session */
  | { type: 'HYDRATE_SESSION', session: Object }
  | { type: 'SWITCH_TO_SESSION', sessionId: string }
  /* Sidebar */
  | { type: 'CHANGE_SIDEBAR_TAB', tab: Tab }
