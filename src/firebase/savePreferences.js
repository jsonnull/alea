export default function savePreferences (firebase, state) {
  const uid = firebase.auth.currentUser.uid
  firebase.database.ref(`prefs/${uid}`).set(state.user.preferences)
    .then(() => {})
    .catch(e => console.error(e))
}
