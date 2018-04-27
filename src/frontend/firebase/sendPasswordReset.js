// @flow
import firebase from '@firebase/app'
import '@firebase/auth'

type Success = {
  success: true
}

type Error = {
  error: true,
  code: string,
  message: string
}

const sendPasswordResetEmail = async (
  email: string
): Promise<Success | Error> => {
  try {
    await firebase.auth().sendPasswordResetEmail(email, {
      url: 'https://www.aleamancer.com/login'
    })

    return { success: true }
  } catch (error) {
    return {
      error: true,
      ...error
    }
  }
}

export default sendPasswordResetEmail
