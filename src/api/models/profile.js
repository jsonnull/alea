// @flow
import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

export const getProfileForCurrentUser = async () => {
  const uid = firebase.auth().currentUser.uid

  return getProfileById(uid)
}

export const getProfileById = async (id: string) => {
  const db = firebase.firestore()
  const usersCollection = db.collection('users')

  const doc = await usersCollection.doc(id).get()

  if (!doc.exists) {
    throw new Error(`Could not get profile for user with id ${id}`)
  }

  const data = doc.data()

  return {
    id: id,
    username: data.username || id
  }
}
