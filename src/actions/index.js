/* @flow */
import type { Action } from './types'
import type { Theme, Tab } from 'types'

/*
 * Messages
 */
export const hydrateMessages = (): Action => ({
  type: 'HYDRATE_MESSAGES'
})

export const sendMessage = (text: string): Action => ({
  type: 'SEND_MESSAGE', text, result: null
})

export const receiveMessage = (message: Object): Action => {
  const { key, from, text, result, timestamp } = message
  return { type: 'RECEIVE_MESSAGE', key, from, text, result, timestamp }
}

/*
 * UI
 */
export const setLoading = (appIsLoading: boolean): Action => ({
  type: 'SET_LOADING', appIsLoading
})

export const setUserLoggedIn = (): Action => ({
  type: 'SET_USER_LOGGED_IN'
})

/*
 * Auth
 */
export const login = (email: string, password: string): Action => ({
  type: 'LOGIN', email, password
})

export const logout = (): Action => ({
  type: 'LOGOUT'
})

/*
 * User Profile
 */
export const hydrateUserProfile = (user: Object): Action => ({
  type: 'HYDRATE_USER_PROFILE', user
})

export const updateUserProfile = (user: Object): Action => ({
  type: 'UPDATE_USER_PROFILE', user
})

/*
 * User Preferences
 */
export const hydratePreferences = (prefs: Object): Action => ({
  type: 'HYDRATE_PREFERENCES', prefs
})

export const toggleChatPin = (): Action => ({
  type: 'TOGGLE_CHAT_PIN'
})

export const changeTheme = (theme: Theme): Action => ({
  type: 'CHANGE_THEME', theme
})

/*
 * User Data
 */
export const hydrateUserData = (user: Object): Action => ({
  type: 'HYDRATE_USER_DATA', user
})

export const hydrateSessionMeta = (sessions: Array<Object>): Action => ({
  type: 'HYDRATE_SESSION_META', sessions
})

export const userAddSession = (sessionId: string): Action => ({
  type: 'USER_ADD_SESSION', sessionId
})

export const setUserSession = (sessionId: string): Action => ({
  type: 'SET_USER_SESSION', sessionId
})

/*
 * Session
 */
export const hydrateSession = (session: Object): Action => ({
  type: 'HYDRATE_SESSION', session
})

export const createSession = (): Action => ({
  type: 'CREATE_SESSION'
})

/*
 * Sidebar
 */
export const changeSidebarTab = (tab: Tab): Action => ({
  type: 'CHANGE_SIDEBAR_TAB', tab
})
