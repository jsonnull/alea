export default function signIn (firebase, store, action) {
  const { email, password } = action
  firebase.auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      store.dispatch({ type: 'LOAD_MESSAGES' })
    })
    .catch(e => console.error(e))
}
