// @flow
import type { Tab } from 'common/types'

export const SHOW_ROLL_MANAGER = 'SHOW_ROLL_MANAGER'
export const HIDE_ROLL_MANAGER = 'HIDE_ROLL_MANAGER'
export const INITIAL_AUTH_FINISHED = 'INITIAL_AUTH_FINISHED'
export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'
export const CHANGE_SIDEBAR_TAB = 'CHANGE_SIDEBAR_TAB'

export type Action =
  | { type: '@@INIT' }
  // UI
  | { type: 'SHOW_ROLL_MANAGER' }
  | { type: 'HIDE_ROLL_MANAGER' }
  // User
  | { type: 'INITIAL_AUTH_FINISHED' }
  | { type: 'USER_LOGGED_IN', id: string, email: string }
  | { type: 'USER_LOGGED_OUT' }
  // Sidebar
  | { type: 'CHANGE_SIDEBAR_TAB', tab: Tab }
