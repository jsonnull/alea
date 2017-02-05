import * as firebase from 'firebase'
import savePreferences from './savePreferences.js' 
import sendMessage from './sendMessage.js' 
import login from './login.js' 
import logoutBackend from './logout.js' 
import updateUserFirebase from './updateUserProfile' 
import {
  updateUserProfile,
  receivePreferences,
  setLoading,
  setUserLoggedIn,
  logout
} from '../actions'

export default class Firebase {
  constructor (config) {
    // Initialize
    firebase.initializeApp(config)

    this.auth = firebase.auth()
    this.database = firebase.database()
    this.storage = firebase.storage()
  }

  // Initialize the auth submodule
  initAuth (store) {
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
  initMessages (messageReceived) {
    this.messageReceived = (message) => { messageReceived(message) }
    this.loadMessages()
  }

  loadMessages () {
    // Reference to the /messages/ database path
    this.messagesRef = this.database.ref('messages')
    // Make sure we remove all previous listeners
    this.messagesRef.off()

    const setMessage = data => {
      const { name, text, result } = data.val()
      const message = {
        key: data.key,
        from: name,
        text,
        result
      }
      this.messageReceived(message)
    }

    this.messagesRef.limitToLast(12).on('child_added', setMessage)
    this.messagesRef.limitToLast(12).on('child_changed', setMessage)
  }

  savePreferences (state) {
    savePreferences(this, state)
  }

  sendMessage (state, action) {
    sendMessage(this, state, action)
  }

  login (email, password) {
    login(this, email, password)
  }

  logout () {
    logoutBackend(this)
  }

  updateUserProfile (action) {
    updateUserFirebase(this, action)
  }
}
