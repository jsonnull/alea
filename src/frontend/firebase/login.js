// @flow
import firebase from '@firebase/app'
import '@firebase/auth'
import type { DBUser } from 'common/types'

type AuthError = {
  code: string,
  message: string
}

const performLogin = async (
  email: string,
  password: string
): Promise<DBUser | AuthError> => {
  try {
    const user: DBUser = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)

    return user
  } catch (error) {
    return error
  }
}

export default performLogin
