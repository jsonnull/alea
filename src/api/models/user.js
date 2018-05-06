// @flow
import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'
import { getGameFromRef } from 'api/models/game'
import type { DBUser, DBGame } from 'common/types'

export const getUserById = async (id: string): Promise<DBUser> => {
  return {
    id
  }
}

export const getCurrentUser = async (): Promise<DBUser> => {
  const currentUser = firebase.auth().currentUser
  if (!currentUser) {
    throw new Error('Error getting `currentUser`, user is not logged in.')
  }

  const id = currentUser.uid

  return {
    id
  }
}

export const getUserGames = async (id: string): Promise<Array<DBGame>> => {
  const usersCollection = firebase.firestore().collection('users')

  const userDoc = await usersCollection.doc(id).get()

  if (!userDoc.exists) {
    // TODO: write defaults for user sessions
    throw new Error(`Could not get games for user with id ${id}`)
  }

  const { sessions = [] } = userDoc.data()

  return Promise.all(sessions.map(getGameFromRef))
}
