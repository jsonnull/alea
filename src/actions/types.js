// @flow
import type {
  Message,
  SessionMeta,
  Tab,
  ThemeName,
  UserProfile
} from '../types'
import type { PreferencesState } from '../reducers/preferences'
import type { SessionsState } from '../reducers/sessions'

export const LOAD_MESSAGES = 'LOAD_MESSAGES'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const APP_FINISHED_LOADING = 'APP_FINISHED_LOADING'
export const SHOW_SETTINGS = 'SHOW_SETTINGS'
export const HIDE_SETTINGS = 'HIDE_SETTINGS'
export const PERFORM_USER_LOGIN = 'PERFORM_USER_LOGIN'
export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const PERFORM_USER_LOGOUT = 'PERFORM_USER_LOGOUT'
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'
export const CHANGE_DISPLAY_NAME = 'CHANGE_DISPLAY_NAME'
export const HYDRATE_USER_PROFILE = 'HYDRATE_USER_PROFILE'
export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE'
export const HYDRATE_PREFERENCES = 'HYDRATE_PREFERENCES'
export const CHANGE_THEME = 'CHANGE_THEME'
export const TOGGLE_CHAT_PIN = 'TOGGLE_CHAT_PIN'
export const HYDRATE_SESSIONS_LIST = 'HYDRATE_SESSIONS_LIST'
export const HYDRATE_SESSION_META = 'HYDRATE_SESSION_META'
export const HYDRATE_SESSION = 'HYDRATE_SESSION'
export const SWITCH_TO_SESSION = 'SWITCH_TO_SESSION'
export const CHANGE_SIDEBAR_TAB = 'CHANGE_SIDEBAR_TAB'

export type Action =
  | { type: '@@INIT' }
  /* Messages */
  | { type: 'LOAD_MESSAGES' }
  | { type: 'SEND_MESSAGE', text: string }
  | { type: 'RECEIVE_MESSAGE', message: Message }
  // UI
  | { type: 'APP_FINISHED_LOADING' }
  | { type: 'SHOW_SETTINGS' }
  | { type: 'HIDE_SETTINGS' }
  // User
  | { type: 'PERFORM_USER_LOGIN', email: string, password: string }
  | { type: 'USER_LOGGED_IN', id: string, email: string }
  | { type: 'PERFORM_USER_LOGOUT' }
  | { type: 'USER_LOGGED_OUT' }
  // User Profile
  | { type: 'CHANGE_DISPLAY_NAME', name: string }
  | { type: 'HYDRATE_USER_PROFILE', user: UserProfile }
  | { type: 'UPDATE_USER_PROFILE', user: UserProfile }
  // User Preferences
  | { type: 'HYDRATE_PREFERENCES', prefs: PreferencesState }
  | { type: 'CHANGE_THEME', theme: ThemeName }
  | { type: 'TOGGLE_CHAT_PIN' }
  // Sessions
  | { type: 'HYDRATE_SESSIONS_LIST', sessions: SessionsState }
  | { type: 'HYDRATE_SESSION_META', sessionId: string, meta: SessionMeta }
  // Current Session
  // | { type: 'HYDRATE_SESSION', session: SessionState }
  | { type: 'SWITCH_TO_SESSION', sessionId: string }
  // Sidebar
  | { type: 'CHANGE_SIDEBAR_TAB', tab: Tab }
