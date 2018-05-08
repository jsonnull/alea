// @flow
import gql from 'graphql-tag'
import gameParticipantsFragment from './gameParticipants'
import type { GameParticipantsType } from './gameParticipants'

export type GameInfoType = {
  id: string,
  name: string,
  owner: string,
  participants: Array<{
    ...$Exact<GameParticipantsType>
  }>
}

export default gql`
  fragment gameInfo on Game {
    id
    name
    owner
    ...gameParticipants
  }

  ${gameParticipantsFragment}
`
