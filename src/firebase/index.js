/* @flow */
import * as firebase from 'firebase'
import MessagesManager from './messages'
import UserManager from './user'
import Auth from './auth'

import type { State, Message, FirebaseMessage } from '../types'
import type { Action } from '../actions/types'
import {
  updateUserProfile,
  receivePreferences,
  setLoading,
  setUserLoggedIn,
  logout
} from '../actions/'

export default class Firebase {
  messages: MessagesManager
  user: UserManager

  constructor (config: Object) {
    // Initialize
    firebase.initializeApp(config)
  }

  // Initialize the auth submodule
  init (store: Object) {
    const hideLogin = () => store.dispatch(setUserLoggedIn())
    const showLogin = () => store.dispatch(logout())
    const finishLoading = () => store.dispatch(setLoading(false))

    // Initiates Firebase auth and listen to auth state changes
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.messages = new MessagesManager(store)
        this.user = new UserManager(store)
        hideLogin()
      } else {
        showLogin()
      }

      finishLoading()
    })
  }

  handleActionMiddleware (): Function {
    return (store: Object) => (next: Function) => (action: Action) => {
      // Error on Firebase-y actions if there's no logged-in user
      if (action.type !== 'LOGIN' && action.type !== 'SET_LOADING') {
        if (firebase.auth().currentUser == undefined) {
          console.error('User is not signed in')
          return
        }
      }

      this.handleAction(action, store)

      next(action)
    }
  }

  handleAction (action: Action, store: Object) {
    const state: State = store.getState()
    switch (action.type) {
      case 'TOGGLE_CHAT_PIN':
      case 'CHANGE_THEME':
        return setTimeout(() => this.user.savePreferences(store.getState()), 0)
      case 'LOAD_MESSAGES':
        return this.messages.loadMessages()
      case 'SEND_MESSAGE':
        return this.messages.sendMessage(state, action)
      case 'LOGIN':
        return Auth.login(action)
      case 'LOGOUT':
        return Auth.logout(state)
      case 'UPDATE_USER_PROFILE':
        return this.user.updateProfile(action)
      default:
        return
    }
  }
}
