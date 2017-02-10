/* @flow */
import * as firebase from 'firebase/app'
import 'firebase/auth'
import MessagesManager from './messages'
import UserManager from './user'
import SessionManager from './session'
import Auth from './authentication'
import type { State, Message, FirebaseMessage } from 'types'
import type { Action } from 'actions/types'
import {
  updateUserProfile,
  setLoading,
  setUserLoggedIn,
  changeSidebarTab,
  logout
} from 'actions'

export default class Firebase {
  messages: MessagesManager
  user: UserManager
  session: SessionManager

  constructor (config: Object) {
    // Initialize
    firebase.initializeApp(config)
  }

  // Initialize the auth submodule
  init (store: Object) {
    const hideLogin = () => store.dispatch(setUserLoggedIn())
    const showLogin = () => store.dispatch(logout())
    const finishLoading = () => store.dispatch(setLoading(false))
    const showSessionChooser = () => store.dispatch(changeSidebarTab('Switcher'))

    const sessionSelector = state => state.user.data.currentSession

    let _this = this
    async function userStateChanged (user: Object) {
      if (user) {
        _this.messages = new MessagesManager(store)
        // Wait for user info before continuing
        _this.user = await UserManager.init(store) 
        // Once user info loads, now we can initiate loading sessions
        _this.session = SessionManager.init(store)
        // See if the user is currently in a session 
        if (sessionSelector(store.getState()) == null) {
          showSessionChooser()
        }
        hideLogin()
      } else {
        showLogin()
      }

      finishLoading()
    }

    // Initiates Firebase auth and listen to auth state changes
    firebase.auth().onAuthStateChanged(user => userStateChanged(user))
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
      // Preferences
      case 'TOGGLE_CHAT_PIN':
      case 'CHANGE_THEME':
        return setTimeout(() => this.user.savePreferences(store.getState()), 0)

      // Messages
      case 'LOAD_MESSAGES':
        return this.messages.loadMessages()
      case 'SEND_MESSAGE':
        return this.messages.sendMessage(state, action)

      // Auth
      case 'LOGIN':
        return Auth.login(action)
      case 'LOGOUT':
        return Auth.logout(state)

      // User Profile
      case 'UPDATE_USER_PROFILE':
        return this.user.updateProfile(action)

      // User Data
      case 'USER_ADD_SESSION':
        return this.user.addSession(action)
      case 'USER_SET_SESSION':
        return this.user.setSession(action)

      // Session
      case 'CREATE_SESSION':
        return this.session.createSession()

      default:
        return
    }
  }
}
