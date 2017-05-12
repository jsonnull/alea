/* @flow */
import type { Action } from './types'
import type { SessionMeta, Message, Theme, Tab } from 'types'
import type { UserProfileState } from 'reducers/user/profile'
import type { UserPreferencesState } from 'reducers/user/preferences'
import type { UserDataState } from 'reducers/user/data'
import type { SessionState } from 'reducers/session'

/*
 * Messages
 */
export const receiveMessage = (message: Message): Action => {
  return { type: 'RECEIVE_MESSAGE', message }
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
export const hydrateUserProfile = (user: UserProfileState): Action => ({
  type: 'HYDRATE_USER_PROFILE', user
})

export const updateUserProfile = (user: UserProfileState): Action => ({
  type: 'UPDATE_USER_PROFILE', user
})

/*
 * User Preferences
 */
export const hydratePreferences = (prefs: UserPreferencesState): Action => ({
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
export const hydrateUserData = (user: UserDataState): Action => ({
  type: 'HYDRATE_USER_DATA', user
})

export const hydrateSessionMeta = (userSessionId: string, meta: SessionMeta): Action => ({
  type: 'HYDRATE_SESSION_META', userSessionId, meta
})

/*
 * Session
 */
export const hydrateSession = (session: SessionState): Action => ({
  type: 'HYDRATE_SESSION', session
})

/*
 * Sidebar
 */
export const changeSidebarTab = (tab: Tab): Action => ({
  type: 'CHANGE_SIDEBAR_TAB', tab
})
