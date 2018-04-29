// @flow
import firebase from '@firebase/app'
import '@firebase/firestore'
import '@firebase/auth'

const setTheme = async (_: any, { theme }: { theme: string }, _ctx: any) => {
  const uid = firebase.auth().currentUser.uid

  const preferenceDoc = firebase
    .firestore()
    .collection('preferences')
    .doc(uid)

  await preferenceDoc.set({ theme: theme }, { merge: true })

  const result = await preferenceDoc.get()

  if (!result.exists) {
    throw new Error('After writing preferences, doc does not exist.')
  }

  return {
    id: result.id,
    ...result.data()
  }
}

export default setTheme
