// @flow
import { compose } from 'recompose'
import Chat from 'frontend/components/Chat'
import queryHandler from 'frontend/components/queryHandler'
import setChatPinned from 'frontend/graphql/mutations/user/setChatPinned'
import sendMessage from 'frontend/graphql/mutations/message/sendMessage'
import { getCurrentUserPreferences } from 'frontend/graphql/queries/currentUser/getCurrentUserPreferences'
import { getGameMessagesByMatch } from 'frontend/graphql/queries/game/getGameMessages'

export default compose(
  getGameMessagesByMatch,
  getCurrentUserPreferences,
  setChatPinned,
  sendMessage,
  queryHandler({
    queries: ['gameMessagesQuery', 'currentUserPreferencesQuery'],
    mergeData: props => ({
      ...props,
      currentUser: {
        preferences: props.currentUserPreferencesQuery.currentUser.preferences
      },
      game: {
        messageConnection: props.gameMessagesQuery.messageConnection
      }
    })
  })
)(Chat)
