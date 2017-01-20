// import { hideModal } from '../../../actions'

export default function signIn (firebase, store, action) {
  const { email, password } = action
  firebase.auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      firebase.loadMessages()
    })
    .catch(e => console.error(e))
}
