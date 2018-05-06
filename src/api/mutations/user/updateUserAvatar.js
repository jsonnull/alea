// @flow
import firebase from '@firebase/app'
import '@firebase/firestore'
import '@firebase/auth'
import '@firebase/storage'
import { getProfileForCurrentUser } from 'api/models/profile'
import type { DBProfile } from 'common/types'

const updateUserAvatar = async (
  _: any,
  { avatar }: { avatar: string },
  _ctx: any
): Promise<DBProfile> => {
  const id = firebase.auth().currentUser.uid

  const profile = await getProfileForCurrentUser()

  const profileDoc = firebase
    .firestore()
    .collection('userProfiles')
    .doc(id)

  const storageRef = firebase
    .storage()
    .ref()
    .child(`avatars/${id}`)

  await storageRef.putString(avatar, 'data_url')
  const url = await storageRef.getDownloadURL()

  const newProfileData = {
    avatar: url
  }

  await profileDoc.set(newProfileData, { merge: true })

  const newProfile = {
    ...profile,
    ...newProfileData
  }

  return {
    id,
    ...newProfile
  }
}

export default updateUserAvatar
