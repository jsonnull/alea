export default function sendMessage (firebase, store, action) {
  if (firebase.auth.currentUser == undefined) {
    console.error('User is not signed in')
    return
  }

  const { text, result = null } = action

  const name = firebase.auth.currentUser.displayName || 'anonymous'

  const message = { name, text, result }

  firebase.messagesRef
    .push(message)
    .then(() => {})
    .catch(e => console.error(e))
}
