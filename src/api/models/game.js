// @flow
import firebase from '@firebase/app'
import '@firebase/firestore'
import { defaultProfile, getProfileById } from 'api/models/profile'
import type { DBGame, DBGameParticipant } from 'common/types'

const defaultGameInfo: DBGame = {
  id: 'none',
  owner: 'none',
  name: 'Untitled Game',
  participants: []
}

const defaultGameParticipantInfo: DBGameParticipant = {
  id: 'none',
  lastSeen: null,
  profile: defaultProfile
}

export const getGameById = async (id: string): Promise<DBGame> => {
  const db = firebase.firestore()
  const gamesCollection = db.collection('sessions')
  const ref = gamesCollection.doc(id)

  return getGameFromRef(ref)
}

export const getGameFromRef = async (ref: Object): Promise<DBGame> => {
  const doc = await ref.get()

  if (!doc.exists) {
    throw new Error(`Could not get game with id ${ref.id}`)
  }

  const { participants = [], ...gameInfo } = doc.data()

  const profiles = await Promise.all(
    participants.map(async p => {
      const profile = await getProfileById(p.id)
      return {
        ...defaultGameParticipantInfo,
        ...p,
        profile
      }
    })
  )

  return {
    ...defaultGameInfo,
    id: ref.id,
    participants: profiles,
    ...gameInfo
  }
}
