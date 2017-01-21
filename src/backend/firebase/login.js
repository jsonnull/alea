export default function signIn (firebase, action) {
  const { email, password } = action

  firebase.auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(e => console.error(e))
}
