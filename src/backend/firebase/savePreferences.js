export default function savePreferences (firebase, state) {
  setTimeout(() => {
    const uid = firebase.auth.currentUser.uid
    firebase.database.ref(`prefs/${uid}`).set(state.preferences)
      .then(() => {})
      .catch(e => console.error(e))
  }, 0)
}
