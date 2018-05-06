// @flow
import firebase from '@firebase/app'
import '@firebase/auth'
import { getProfileById } from 'api/models/profile'
import type { DBProfile } from 'common/types'

const setUsername = async (
  _: any,
  { name }: { name: string },
  _ctx: any
): Promise<DBProfile> => {
  const user = firebase.auth().currentUser
  const id = user.uid

  // Set displayName on local user, for fast local access
  await user.updateProfile({
    displayName: name
  })

  // Set username on profile
  const profilesCollection = firebase.firestore().collection('userProfiles')
  const profileDoc = await profilesCollection.doc(id)

  profileDoc.set({ username: name }, { merge: true })

  // Get the new profile
  const result = await getProfileById(id)

  return result
}

export default setUsername
