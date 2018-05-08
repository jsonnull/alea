// @flow
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import gameInfoFragment from '../../fragments/game/gameInfo'
import type { GameInfoType } from '../../fragments/game/gameInfo'

export type GetGameInfoType = {
  ...$Exact<GameInfoType>
}

const getGameInfoByMatchOptions = {
  options: ({ match: { params: { id } } }) => ({
    variables: {
      id
    }
  }),
  props: props => ({
    gameInfoQuery: props.data
  })
}

export const getGameInfoQuery = gql`
  query getGameInfo($id: ID!) {
    game(id: $id) {
      id
      ...gameInfo
    }
  }
  ${gameInfoFragment}
`

export const getGameInfoByMatch = graphql(
  getGameInfoQuery,
  getGameInfoByMatchOptions
)
