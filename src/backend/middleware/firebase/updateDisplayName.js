export default function updateDisplayName (firebase, store, action) {
  let user = firebase.auth.currentUser

  user.updateProfile({
    displayName: name
  })
    .then(() => {
      this.userDidChange({ displayName: name })
    })
    .catch(e => console.error(e))
}
