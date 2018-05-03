// @flow
import { compose } from 'recompose'
import Settings from 'frontend/components/Settings'
import queryHandler from 'frontend/components/queryHandler'
import setTheme from 'frontend/graphql/mutations/user/setTheme'
import setUsername from 'frontend/graphql/mutations/user/setUsername'
import { getCurrentUserPreferences } from 'frontend/graphql/queries/currentUser/getCurrentUserPreferences'
import { getCurrentUserProfile } from 'frontend/graphql/queries/currentUser/getCurrentUserProfile'

export default compose(
  getCurrentUserPreferences,
  getCurrentUserProfile,
  setTheme,
  setUsername,
  queryHandler({
    queries: ['currentUserPreferencesQuery', 'currentUserProfileQuery'],
    mergeData: props => ({
      ...props,
      currentUser: {
        preferences: props.currentUserPreferencesQuery.currentUser.preferences,
        profile: props.currentUserProfileQuery.currentUser.profile
      }
    })
  })
)(Settings)
