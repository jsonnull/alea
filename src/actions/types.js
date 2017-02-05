/* @flow */

export type Action =
    { type: 'LOAD_MESSAGES', firebase: 'LOAD_MESSAGES' }
  | { type: 'SEND_MESSAGE', firebase: 'SEND_MESSAGE', text: string, result: ?string }
  | { type: 'RECEIVE_MESSAGE', key: string, from: string, text: string, result: ?string }
  | { type: 'SET_LOADING', appIsLoading: boolean }
  | { type: 'SET_USER_LOGGED_IN' }
  | { type: 'UPDATE_USER_PROFILE', user: Object, firebase: 'UPDATE_USER_PROFILE' }
  | { type: 'LOGIN', email: string, password: string, firebase: 'LOGIN' }
  | { type: 'LOGOUT' }
  | { type: 'TOGGLE_CHAT_PIN', firebase: 'SAVE_PREFERENCES' }
  | { type: 'CHANGE_THEME', firebase: 'SAVE_PREFERENCES', theme: string }
  | { type: 'RECEIVE_PREFERENCES', prefs: Object }
  | { type: 'CHANGE_SIDEBAR_TAB', tab: string }
