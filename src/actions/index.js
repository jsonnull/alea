/* @flow */
import type { Action } from './types'
import type { Theme, Tab } from 'types'

/*
 * Messages
 */
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

export const setUserLoggedIn = (userIsLoggedIn: boolean): Action => ({
  type: 'SET_USER_LOGGED_IN', userIsLoggedIn
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

export const changeTheme = (theme: Theme): Action => ({
  type: 'CHANGE_THEME', theme
})

export const toggleChatPin = (): Action => ({
  type: 'TOGGLE_CHAT_PIN' 
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

/*
 * Session
 */
export const hydrateSession = (session: Object): Action => ({
  type: 'HYDRATE_SESSION', session
})

/*
 * Sidebar
 */
export const changeSidebarTab = (tab: Tab): Action => ({
  type: 'CHANGE_SIDEBAR_TAB', tab
})
