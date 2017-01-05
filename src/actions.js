export const SEND_MESSAGE = 'SEND_MESSAGE'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const UPDATE_USER = 'UPDATE_USER'
export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'SHOW_MODAL'
export const TOGGLE_CHAT_PIN = 'TOGGLE_CHAT_PIN'

export const MODALS = {
  LOGIN_MODAL: 'LOGIN_MODAL',
  PROFILE_MODAL: 'PROFILE_MODAL'
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

export function showModal (modal) {
  return { type: SHOW_MODAL, modal }
}

export function hideModal () {
  return { type: HIDE_MODAL }
}

export function toggleChatPin () {
  return { type: TOGGLE_CHAT_PIN }
}
