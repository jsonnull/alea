export default function savePreferences (firebase, store, action) {
  // Don't attempt to save preferences if there's no currentUser
  if (firebase.auth.currentUser == null) {
    return
  }

  const uid = firebase.auth.currentUser.uid
  const state = store.getState()
  firebase.database.ref(`prefs/${uid}`).set(state.preferences)
    .then(() => {})
    .catch(e => console.error(e))
}
