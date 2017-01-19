export const MODALS = {
  LOGIN_MODAL: 'LOGIN_MODAL',
  PROFILE_MODAL: 'PROFILE_MODAL'
}

export const THEMES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
}

/* Messages */

export const SEND_MESSAGE = 'SEND_MESSAGE'
export const sendMessage = text => ({type: SEND_MESSAGE, text })

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const receiveMessage = message => {
  const { key, from, text, result } = message
  return { type: RECEIVE_MESSAGE, key, from, text, result }
}

/* User */
export const UPDATE_USER = 'UPDATE_USER'
export const updateUser = user => ({ type: UPDATE_USER, user })

export const LOGIN = 'LOGIN'
export const login = (email, password) => ({ type: LOGIN, email, password })

export const LOGOUT = 'LOGOUT'
export const logout = () => ({ type: LOGOUT })

/* Modals */
export const SHOW_MODAL = 'SHOW_MODAL'
export const showModal = modal => ({ type: SHOW_MODAL, modal })

export const HIDE_MODAL = 'SHOW_MODAL'
export const hideModal = () => ({ type: HIDE_MODAL })

/* Preferences */
export const TOGGLE_CHAT_PIN = 'TOGGLE_CHAT_PIN'
export const toggleChatPin = () => ({ type: TOGGLE_CHAT_PIN })

export const CHANGE_THEME = 'CHANGE_THEME'
export const changeTheme = theme => ({ type: CHANGE_THEME })

export const RECEIVE_PREFS = 'RECEIVE_PREFS'
export const receivePreferences = prefs => ({ type: RECEIVE_PREFS, prefs })

/* Sidebar */
export const CHANGE_SIDEBAR_TAB = 'CHANGE_SIDEBAR_TAB'
export const changeSidebarTab = tab => ({ type: CHANGE_SIDEBAR_TAB, tab })
