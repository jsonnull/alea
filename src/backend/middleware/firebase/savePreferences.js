export default function savePreferences (firebase, store, action) {
  const uid = firebase.auth.currentUser.uid
  const state = store.getState()
  firebase.database.ref(`prefs/${uid}`).set(state.preferences)
    .then(() => {})
    .catch(e => console.error(e))
}
