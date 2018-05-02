// @flow
import type { Tab } from 'common/types'

export const APP_FINISHED_LOADING = 'APP_FINISHED_LOADING'
export const INITIAL_AUTH_FINISHED = 'INITIAL_AUTH_FINISHED'
export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'
export const CHANGE_SIDEBAR_TAB = 'CHANGE_SIDEBAR_TAB'

export type Action =
  | { type: '@@INIT' }
  // UI
  | { type: 'APP_FINISHED_LOADING' }
  // User
  | { type: 'INITIAL_AUTH_FINISHED' }
  | { type: 'USER_LOGGED_IN', id: string, email: string }
  | { type: 'USER_LOGGED_OUT' }
  // Sidebar
  | { type: 'CHANGE_SIDEBAR_TAB', tab: Tab }
