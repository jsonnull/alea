// @flow
import { compose } from 'recompose'
import Game from 'frontend/components/Game'
import queryHandler from 'frontend/components/queryHandler'
import { getGameInfoByMatch } from 'frontend/graphql/queries/game/getGameInfo'

export default compose(
  getGameInfoByMatch,
  queryHandler({
    queries: ['gameInfoQuery']
  })
)(Game)
