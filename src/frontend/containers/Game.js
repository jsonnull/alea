// @flow
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { SHOW_ROLL_MANAGER, HIDE_ROLL_MANAGER } from 'frontend/actions/types'
import enterLock from 'frontend/containers/enterLock'
import Game from 'frontend/components/Game'
import queryHandler from 'frontend/components/queryHandler'
import { getGameInfoByMatch } from 'frontend/graphql/queries/game/getGameInfo'
import type { State } from 'frontend/store'

const mapStateToProps = (state: State) => ({
  showRollManager: state.ui.showRollManager
})

const mapDispatchToProps = (dispatch: Function) => ({
  setRollManagerShowing: (shouldShow: boolean) => {
    const type = shouldShow ? SHOW_ROLL_MANAGER : HIDE_ROLL_MANAGER
    dispatch({ type })
  }
})

export default compose(
  enterLock,
  getGameInfoByMatch,
  queryHandler({
    queries: ['gameInfoQuery']
  }),
  connect(mapStateToProps, mapDispatchToProps)
)(Game)
