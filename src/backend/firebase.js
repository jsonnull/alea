import * as firebase from 'firebase'
// import { addMessage, updateUser, hideModal } from '../actions'
// import CommandParser from './commands'

export default class Firebase {
  constructor (config) {
    // Initialize
    firebase.initializeApp(config)

    this.auth = firebase.auth()
    this.database = firebase.database()
    this.storage = firebase.storage()

    this.onError = (e) => {
      console.error(e.code, e.message)
    }
  }

  // Initialize the auth submodule
  initAuth (userDidChange) {
    this.userDidChange = (user) => { userDidChange(user) }

    // Initiates Firebase auth and listen to auth state changes
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        let user = {
          isLoggedIn: true,
          displayName: this.auth.currentUser.displayName,
          photoURL: this.auth.currentUser.photoURL
        }

        this.userDidChange(user)
      }
    })
  }

  // Initialize messages functionality
  initMessages (messageReceived) {
    this.messageReceived = (message) => { messageReceived(message) }
    this.loadMessages()
  }

  signIn (email, password) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.loadMessages()
      })
      .catch(error => {
        console.log(error.code, error.message)
      })
  }

  updateDisplayName (name) {
    let user = this.auth.currentUser

    user.updateProfile({
      displayName: name
    })
      .then(() => {
        this.userDidChange({ displayName: name })
      })
      .catch(error => this.onError(error))
  }
  
  isUserSignedIn () {
    if (this.auth.currentUser) {
      return true
    }
    return false
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

  sendMessage (message) {
    if (this.isUserSignedIn() == false) {
      console.error('User is not signed in')
      return
    }

    const { text, result } = message

    const name = this.auth.currentUser.displayName || 'anonymous'

    const messageToSend = { name, text, result }

    this.messagesRef
      .push(messageToSend)
      .then(() => {})
      .catch(error => this.onError(error))
  }
}
