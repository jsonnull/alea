/* @flow */
import type { Theme, MessageResult, Tab } from 'types'

export type Action =
  /* Messages */
    { type: 'HYDRATE_MESSAGES' }
  | { type: 'SEND_MESSAGE', text: string, result: ?MessageResult }
  | { type: 'RECEIVE_MESSAGE', key: string, from: string, text: string, result: ?MessageResult, timestamp: number }
  /* UI */
  | { type: 'SET_LOADING', appIsLoading: boolean }
  | { type: 'SET_USER_LOGGED_IN' }
  /* Auth */
  | { type: 'LOGIN', email: string, password: string }
  | { type: 'LOGOUT' }
  /* User Profile */
  | { type: 'HYDRATE_USER_PROFILE', user: Object }
  | { type: 'UPDATE_USER_PROFILE', user: Object }
  /* User Preferences */
  | { type: 'HYDRATE_PREFERENCES', prefs: Object }
  | { type: 'TOGGLE_CHAT_PIN' }
  | { type: 'CHANGE_THEME', theme: Theme }
  /* User Data */
  | { type: 'HYDRATE_USER_DATA', user: Object }
  | { type: 'HYDRATE_SESSION_META', sessions: Array<Object> }
  | { type: 'USER_ADD_SESSION', sessionId: string }
  | { type: 'SET_USER_SESSION', sessionId: string }
  /* Session */
  | { type: 'HYDRATE_SESSION', session: Object }
  | { type: 'SWITCH_TO_SESSION', sessionId: string }
  | { type: 'CREATE_SESSION' }
  /* Sidebar */
  | { type: 'CHANGE_SIDEBAR_TAB', tab: Tab }
