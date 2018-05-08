// @flow
import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'
import type { DBPreferences } from 'common/types'

const defaultPreferences: DBPreferences = {
  id: 'none',
  theme: 'light',
  chatPinned: false
}

export const getPreferencesForCurrentUser = async (): Promise<
  DBPreferences
> => {
  const uid = firebase.auth().currentUser.uid

  return getPreferencesById(uid)
}

export const getPreferencesById = async (
  id: string
): Promise<DBPreferences> => {
  const preferencesCollection = firebase.firestore().collection('preferences')

  const doc = await preferencesCollection.doc(id).get()

  if (!doc.exists) {
    throw new Error(`Could not get preferences for user with id ${id}`)
  }

  const preferences = doc.data()

  return {
    ...defaultPreferences,
    ...preferences
  }
}
