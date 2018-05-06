// @flow
import { compose } from 'recompose'
import Preferences from 'frontend/components/Preferences'
import queryHandler from 'frontend/components/queryHandler'
import setTheme from 'frontend/graphql/mutations/user/setTheme'
import { getCurrentUserPreferences } from 'frontend/graphql/queries/currentUser/getCurrentUserPreferences'

export default compose(
  getCurrentUserPreferences,
  setTheme,
  queryHandler({
    queries: ['currentUserPreferencesQuery'],
    mergeData: props => ({
      ...props,
      currentUser: props.currentUserPreferencesQuery.currentUser
    })
  })
)(Preferences)
