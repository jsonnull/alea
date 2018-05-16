// @flow
import React from 'react'
import Chat from 'frontend/containers/Chat'
import Map from 'frontend/containers/Map'
import Sidebar from 'frontend/containers/Sidebar'
import RollManager from 'frontend/components/RollManager'
import { GameInner } from './styles'

type Props = {
  isLoading: boolean,
  hasError: boolean,
  gameInfoQuery: Object,
  showRollManager: boolean,
  enterLock: boolean,
  setRollManagerShowing: boolean => void,
  match: Object
}

class Game extends React.Component<Props> {
  toggleRollManager = (e: KeyboardEvent) => {
    if (!this.props.enterLock && e.key == 'Enter') {
      const shouldShow = !this.props.showRollManager
      this.props.setRollManagerShowing(shouldShow)
    }
  }

  componentDidMount() {
    window.addEventListener('keypress', this.toggleRollManager)
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.toggleRollManager)
  }

  render() {
    const {
      match,
      isLoading,
      hasError,
      gameInfoQuery,
      showRollManager
    } = this.props

    const participants =
      isLoading || hasError ? null : gameInfoQuery.game.participants

    return (
      <GameInner>
        <Sidebar match={match} />
        <Map />
        <Chat match={match} participants={participants} />
        {showRollManager && <RollManager />}
      </GameInner>
    )
  }
}

export default Game
