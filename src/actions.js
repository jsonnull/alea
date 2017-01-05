// messages
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
// user
export const UPDATE_USER = 'UPDATE_USER'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
// modals
export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'SHOW_MODAL'
// prefs
export const TOGGLE_CHAT_PIN = 'TOGGLE_CHAT_PIN'
export const CHANGE_THEME = 'CHANGE_THEME'
export const RECEIVE_PREFS = 'RECEIVE_PREFS'

export const MODALS = {
  LOGIN_MODAL: 'LOGIN_MODAL',
  PROFILE_MODAL: 'PROFILE_MODAL'
}

export const THEMES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
}

export function sendMessage (text) {
  return { type: SEND_MESSAGE, text }
}

export function receiveMessage (message) {
  const { key, from, text, result } = message
  return { type: RECEIVE_MESSAGE, key, from, text, result }
}

export function updateUser (user) {
  return { type: UPDATE_USER, user }
}

export function login (email, password) {
  return { type: LOGIN, email, password } 
}

export function logout () {
  return { type: LOGOUT }
}

export function showModal (modal) {
  return { type: SHOW_MODAL, modal }
}

export function hideModal () {
  return { type: HIDE_MODAL }
}

export function toggleChatPin () {
  return { type: TOGGLE_CHAT_PIN }
}

export function changeTheme (theme) {
  return { type: CHANGE_THEME }
}

export function receivePreferences (prefs) {
  return { type: RECEIVE_PREFS, prefs }
}
