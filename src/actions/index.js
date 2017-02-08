/* @flow */
import type { Action } from './types'
import type { Theme } from 'types'

// Firebase calls
export const loadMessages = (): Action => ({ type: 'LOAD_MESSAGES' })

/* Messages */
export const sendMessage = (text: string): Action => ({ type: 'SEND_MESSAGE', text, result: null })

export const receiveMessage = (message: Object): Action => {
  const { key, from, text, result, timestamp } = message
  return { type: 'RECEIVE_MESSAGE', key, from, text, result, timestamp }
}

/* UI */
export const setLoading = (appIsLoading: boolean): Action => ({ type: 'SET_LOADING', appIsLoading })

export const setUserLoggedIn = (): Action => ({ type: 'SET_USER_LOGGED_IN' })

/* User */
export const updateUserProfile = (user: Object): Action => ({ type: 'UPDATE_USER_PROFILE', user })
export const loadUserProfile = (user: Object): Action => ({ type: 'LOAD_USER_PROFILE', user })

export const login = (email: string, password: string): Action => ({ type: 'LOGIN', email, password })

export const logout = (): Action => ({ type: 'LOGOUT' })

/* Preferences */
export const toggleChatPin = (): Action => ({ type: 'TOGGLE_CHAT_PIN' })

export const changeTheme = (theme: Theme): Action => ({ type: 'CHANGE_THEME', theme })

export const receivePreferences = (prefs: Object): Action => ({ type: 'RECEIVE_PREFERENCES', prefs })

/* Sidebar */
export const changeSidebarTab = (tab: string): Action => ({ type: 'CHANGE_SIDEBAR_TAB', tab })
