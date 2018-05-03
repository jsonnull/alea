// @flow
import firebase from '@firebase/app'
import '@firebase/auth'

const setUsername = async (_: any, { name }: { name: string }, _ctx: any) => {
  const user = firebase.auth().currentUser

  await user.updateProfile({
    displayName: name
  })

  return {
    id: user.uid,
    username: name
  }
}

export default setUsername
