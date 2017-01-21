export default function signOut (firebase) {
  firebase.auth
    .signOut()
    .then(() => {})
    .catch(e => console.error(e))
}
