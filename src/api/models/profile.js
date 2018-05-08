// @flow
import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'
import type { DBProfile } from 'common/types'

export const defaultProfile: DBProfile = {
  id: 'none',
  username: 'anonymous',
  avatar: null
}

export const getProfileForCurrentUser = async (): Promise<DBProfile> => {
  const user = firebase.auth().currentUser

  const defaultCurrentUser = {
    ...defaultProfile,
    id: user.uid,
    username: user.displayName
  }

  // Now we should fetch any other profile data
  const profile = await getProfileById(user.uid)

  return {
    ...defaultCurrentUser,
    ...profile
  }
}

export const getProfileById = async (id: string): Promise<DBProfile> => {
  const profilesCollection = firebase.firestore().collection('userProfiles')
  const profile = await profilesCollection.doc(id).get()

  if (!profile.exists) {
    // TODO: Write default profile data to the endpoint
    return { ...defaultProfile }
  }

  const { username = 'anonymous', avatar = null } = profile.data()

  return {
    ...defaultProfile,
    id,
    username,
    avatar
  }
}
