/* @flow */
import * as firebase from 'firebase/app'
import 'firebase/auth'
import MessagesManager from './messages'
import UserManager from './user'
import SessionManager from './session'
import Auth from './authentication'
import type { State } from 'store'
import type { Theme } from 'types'
import type { Action } from 'actions/types'
import {
  setLoading,
  setUserLoggedIn,
  changeSidebarTab,
  toggleChatPin,
  updateUserProfile,
  changeTheme
} from 'actions'

export default class Firebase {
  store: Object
  messages: MessagesManager
  user: UserManager
  session: SessionManager

  constructor (store: Object, config: Object) {
    // Initialize
    firebase.initializeApp(config)
    this.store = store

    // Initialize the auth submodule
    const hideLogin = () => store.dispatch(setUserLoggedIn())
    const showLogin = () => this.logout()
    const finishLoading = () => store.dispatch(setLoading(false))
    const showSessionChooser = () => store.dispatch(changeSidebarTab('Sessions'))

    const sessionSelector = state => state.user.data.currentSession

    let _this = this
    async function userStateChanged (user: Object) {
      if (user) {
        _this.messages = new MessagesManager(_this.store)
        // Wait for user info before continuing
        _this.user = await UserManager.init(_this.store) 
        // Once user info loads, now we can initiate loading sessions
        _this.session = SessionManager.init(_this.store)
        // See if the user is currently in a session 
        if (sessionSelector(_this.store.getState()) == null) {
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

  /* Preferences */
  toggleChatPin () {
    this.store.dispatch(toggleChatPin())
    return setTimeout(() => this.user.savePreferences(this.store.getState()), 0)
  }

  changeTheme (theme: Theme) {
    this.store.dispatch(changeTheme(theme))
    return setTimeout(() => this.user.savePreferences(this.store.getState()), 0)
  }

  /* Messages */
  sendMessage (text: string) {
    this.messages.sendMessage(text)
  }

  /* Auth */
  login (email: string, password: string) {
    Auth.login(email, password)
  }

  logout () {
    Auth.logout()
  }

  /* User */
  // FIXME: User type
  updateUserProfile (user: Object) {
    this.store.dispatch(updateUserProfile(user))
    this.user.saveProfile(user)
  }

  addUserSession (sessionId: string) {
    this.user.addSession(sessionId)
  }

  setUserSession (sessionId: string) {
    this.user.setSession(sessionId)
  }

  /* Session */
  async createSession () {
    const session = await this.session.createSession()
    const sessionId = session.key
    this.addUserSession(sessionId)
  }
}
