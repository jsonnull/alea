import { updateUser } from '../../../actions'

export default function signOut (firebase, store, action) {
  firebase.auth.signOut()
    .then(() => store.dispatch(updateUser({ isLoggedIn: false })))
    .catch(e => console.error(e))
}
