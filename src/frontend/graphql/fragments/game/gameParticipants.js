// @flow
import gql from 'graphql-tag'
import profileDataFragment from '../profile/profileData'
import type { ProfileDataType } from '../profile/profileData'

export type GameParticipantsType = Array<{
  id: string,
  lastSeen: ?Date,
  profile: {
    ...$Exact<ProfileDataType>
  }
}>

export default gql`
  fragment gameParticipants on Game {
    participants {
      id
      lastSeen
      profile {
        ...profileData
      }
    }
  }
  ${profileDataFragment}
`
