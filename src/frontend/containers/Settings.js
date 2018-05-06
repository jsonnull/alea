// @flow
import { compose } from 'recompose'
import Settings from 'frontend/components/Settings'
import queryHandler from 'frontend/components/queryHandler'
import setUsername from 'frontend/graphql/mutations/user/setUsername'
import updateUserAvatar from 'frontend/graphql/mutations/user/updateUserAvatar'
import { getCurrentUserProfile } from 'frontend/graphql/queries/currentUser/getCurrentUserProfile'

export default compose(
  getCurrentUserProfile,
  setUsername,
  updateUserAvatar,
  queryHandler({
    queries: ['currentUserProfileQuery'],
    mergeData: props => ({
      ...props,
      currentUser: props.currentUserProfileQuery.currentUser
    })
  })
)(Settings)
