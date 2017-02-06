/* @flow */

export type Action =
    { type: 'LOAD_MESSAGES' }
  | { type: 'SEND_MESSAGE', text: string, result: ?string }
  | { type: 'RECEIVE_MESSAGE', key: string, from: string, text: string, result: ?string, timestamp: number }
  | { type: 'SET_LOADING', appIsLoading: boolean }
  | { type: 'SET_USER_LOGGED_IN' }
  | { type: 'UPDATE_USER_PROFILE', user: Object }
  | { type: 'LOAD_USER_PROFILE', user: Object }
  | { type: 'LOGIN', email: string, password: string }
  | { type: 'LOGOUT' }
  | { type: 'TOGGLE_CHAT_PIN' }
  | { type: 'CHANGE_THEME', theme: string }
  | { type: 'RECEIVE_PREFERENCES', prefs: Object }
  | { type: 'CHANGE_SIDEBAR_TAB', tab: string }
