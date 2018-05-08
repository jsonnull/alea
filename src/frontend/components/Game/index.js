// @flow
import React from 'react'
import Chat from 'frontend/containers/Chat'
import Map from 'frontend/containers/Map'
import Sidebar from 'frontend/containers/Sidebar'
import { GameInner } from './styles'

type Props = {
  isLoading: boolean,
  hasError: boolean,
  gameInfoQuery: Object,
  match: Object
}

const Game = (props: Props) => {
  const { match, isLoading, hasError, gameInfoQuery } = props

  const participants =
    isLoading || hasError ? null : gameInfoQuery.game.participants

  return (
    <GameInner>
      <Sidebar match={match} />
      <Map />
      <Chat match={match} participants={participants} />
    </GameInner>
  )
}

export default Game
