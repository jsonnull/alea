export const THEME_LIGHT = 'light'
export const THEME_DARK = 'dark'

// Firebase calls
export const LOAD_MESSAGES = 'LOAD_MESSAGES'
export const loadMessages = () => ({ type: LOAD_MESSAGES, firebase: LOAD_MESSAGES })

/* Messages */
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const sendMessage = text => ({ type: SEND_MESSAGE, text, firebase: SEND_MESSAGE })

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const receiveMessage = message => {
  const { key, from, text, result } = message
  return { type: RECEIVE_MESSAGE, key, from, text, result }
}

/* User */
export const UPDATE_USER = 'UPDATE_USER'
export const updateUser = user => ({ type: UPDATE_USER, user, firebase: UPDATE_USER })

export const LOGIN = 'LOGIN'
export const login = (email, password) => ({ type: LOGIN, email, password, firebase: LOGIN })

export const LOGOUT = 'LOGOUT'
export const logout = () => ({ type: LOGOUT })

/* Preferences */
export const SAVE_PREFERENCES = 'SAVE_PREFERENCES'

export const TOGGLE_CHAT_PIN = 'TOGGLE_CHAT_PIN'
export const toggleChatPin = () => ({ type: TOGGLE_CHAT_PIN, firebase: SAVE_PREFERENCES })

export const CHANGE_THEME = 'CHANGE_THEME'
export const changeTheme = theme => ({ type: CHANGE_THEME, theme, firebase: SAVE_PREFERENCES })

export const RECEIVE_PREFS = 'RECEIVE_PREFS'
export const receivePreferences = prefs => ({ type: RECEIVE_PREFS, prefs })

/* Sidebar */
export const CHANGE_SIDEBAR_TAB = 'CHANGE_SIDEBAR_TAB'
export const changeSidebarTab = tab => ({ type: CHANGE_SIDEBAR_TAB, tab })
