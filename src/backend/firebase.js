import * as firebase from 'firebase'
import savePreferences from './firebase/savePreferences.js' 
import sendMessage from './firebase/sendMessage.js' 
import login from './firebase/login.js' 
import logout from './firebase/logout.js' 
import updateUserFirebase from './firebase/updateUser.js' 
import {
  updateUser,
  receivePreferences,
  setLoading
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
    const hydrateUser = user => store.dispatch(updateUser(user))
    const hydratePreferences = prefs => store.dispatch(receivePreferences(prefs))
    const finishLoading = () => store.dispatch(setLoading(false))

    // Initiates Firebase auth and listen to auth state changes
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in
        const { displayName, photoURL } = this.auth.currentUser
        let user = {
          isLoggedIn: true,
          displayName,
          photoURL
        }

        hydrateUser(user)

        // load preferences
        const uid = this.auth.currentUser.uid
        this.database.ref(`prefs/${uid}`).once('value')
          .then(prefs => {
            hydratePreferences(prefs.val())
          })
          .catch(e => console.error(e))
      } else {
        // show login screen
        hydrateUser({ isLoggedIn: false })
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
    logout(this)
  }

  updateUser (action) {
    updateUserFirebase(this, action)
  }
}
