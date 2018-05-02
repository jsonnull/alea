// @flow
import { compose } from 'recompose'
import queryHandler from 'frontend/components/queryHandler'
import Sessions from 'frontend/components/Sessions'
import { getCurrentUserGames } from 'frontend/graphql/queries/currentUser/getCurrentUserGames'

export default compose(
  getCurrentUserGames,
  queryHandler({
    queries: ['currentUserGamesQuery'],
    mergeData: props => ({
      ...props,
      currentUser: {
        games: props.currentUserGamesQuery.currentUser.games
      }
    })
  })
)(Sessions)
