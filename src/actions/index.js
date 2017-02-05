/* @flow */
import type { Action } from './types'

export const THEME_LIGHT = 'light'
export const THEME_DARK = 'dark'

// Firebase calls
export const loadMessages = (): Action => ({ type: 'LOAD_MESSAGES', firebase: 'LOAD_MESSAGES' })

/* Messages */
export const sendMessage = (text: string): Action => ({ type: 'SEND_MESSAGE', text, result: null, firebase: 'SEND_MESSAGE' })

export const receiveMessage = (message: Object): Action => {
  const { key, from, text, result } = message
  return { type: 'RECEIVE_MESSAGE', key, from, text, result }
}

/* UI */
export const setLoading = (appIsLoading: boolean): Action => ({ type: 'SET_LOADING', appIsLoading })

export const setUserLoggedIn = (): Action => ({ type: 'SET_USER_LOGGED_IN' })

/* User */
export const updateUserProfile = (user: Object): Action => ({ type: 'UPDATE_USER_PROFILE', user, firebase: 'UPDATE_USER_PROFILE' })

export const login = (email: string, password: string): Action => ({ type: 'LOGIN', email, password, firebase: 'LOGIN' })

export const logout = (): Action => ({ type: 'LOGOUT' })

/* Preferences */
export const toggleChatPin = (): Action => ({ type: 'TOGGLE_CHAT_PIN', firebase: 'SAVE_PREFERENCES' })

export const changeTheme = (theme: string): Action => ({ type: 'CHANGE_THEME', theme, firebase: 'SAVE_PREFERENCES' })

export const receivePreferences = (prefs: Object): Action => ({ type: 'RECEIVE_PREFERENCES', prefs })

/* Sidebar */
export const changeSidebarTab = (tab: string): Action => ({ type: 'CHANGE_SIDEBAR_TAB', tab })
