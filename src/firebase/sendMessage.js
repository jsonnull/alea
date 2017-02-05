export default function sendMessage (firebase, state, action) {
  const { text, result = null } = action

  const message = {
    name: state.user.displayName,
    text,
    result
  }

  firebase.messagesRef
    .push(message)
    .then(() => {})
    .catch(e => console.error(e))
}
