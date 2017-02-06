/* @flow */
import * as firebase from 'firebase'
import savePreferences from './savePreferences.js' 
// import sendMessage from './sendMessage.js' 
import login from './login.js' 
import logoutBackend from './logout.js' 
import updateUserFirebase from './updateUserProfile' 
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
  firebase: Object
  auth: Object
  database: Object
  storage: Object
  messagesRef: Object
  messageReceived: Function

  constructor (config: Object) {
    // Initialize
    firebase.initializeApp(config)

    this.firebase = firebase
    this.auth = firebase.auth()
    this.database = firebase.database()
    this.storage = firebase.storage()
  }

  // Initialize the auth submodule
  initAuth (store: Object) {
    const hydrateUserProfile = user => store.dispatch(updateUserProfile(user))
    const hydratePreferences = prefs => store.dispatch(receivePreferences(prefs))
    const hideLogin = user => store.dispatch(setUserLoggedIn())
    const showLogin = () => store.dispatch(logout())
    const finishLoading = () => store.dispatch(setLoading(false))

    // Initiates Firebase auth and listen to auth state changes
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in
        const { displayName, photoURL } = this.auth.currentUser
        let user = {
          displayName,
          photoURL
        }

        hydrateUserProfile(user)
        hideLogin()

        // load preferences
        const uid = this.auth.currentUser.uid
        this.database.ref(`prefs/${uid}`).once('value')
          .then(prefs => {
            hydratePreferences(prefs.val())
          })
          .catch(e => console.error(e))
      } else {
        showLogin()
      }

      finishLoading()
    })
  }

  // Initialize messages functionality
  initMessages (messageReceived: Function) {
    this.messageReceived = (message) => { messageReceived(message) }
    this.loadMessages()
  }

  loadMessages () {
    // Reference to the /messages/ database path
    this.messagesRef = this.database.ref('messages')
    // Make sure we remove all previous listeners
    this.messagesRef.off()

    const setMessage = data => {
      const { name, text, result, timestamp } = data.val()
      const message: Message = {
        key: data.key,
        from: name,
        text,
        result,
        timestamp
      }
      this.messageReceived(message)
    }

    this.messagesRef.limitToLast(12).on('child_added', setMessage)
    // this.messagesRef.limitToLast(12).on('child_changed', setMessage)
  }

  handleAction(action: Action, store: Object) {
    const state: State = store.getState()
    switch (action.type) {
      case 'TOGGLE_CHAT_PIN':
      case 'CHANGE_THEME':
        return setTimeout(() => this.savePreferences(store.getState()), 0)
      case 'LOAD_MESSAGES':
        return this.loadMessages()
      case 'SEND_MESSAGE':
        return this.sendMessage(state, action)
      case 'LOGIN':
        return this.login(action)
      case 'LOGOUT':
        return this.logout(state)
      case 'UPDATE_USER_PROFILE':
        return this.updateUserProfile(action)
      default:
        return
    }
  }

  savePreferences (state: State) {
    savePreferences(this, state)
  }

  sendMessage (state: State, action: Action) {
    if (action.type === 'SEND_MESSAGE') { // needed for flow type-checking to pass
      const { text, result = null } = action

      const message: FirebaseMessage = {
        name: state.user.profile.displayName,
        text,
        result,
        timestamp: this.firebase.database.ServerValue.TIMESTAMP
      }

      this.messagesRef
        .push(message)
        .then(() => {})
        .catch(e => console.error(e))
    }
  }

  login (action: Action) {
    login(this, action)
  }

  logout () {
    logoutBackend(this)
  }

  updateUserProfile (action: Action) {
    updateUserFirebase(this, action)
  }
}
