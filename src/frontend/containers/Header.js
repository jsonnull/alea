// @flow
import { compose } from 'recompose'
import Header from 'frontend/components/Header'
import queryHandler from 'frontend/components/queryHandler'
import { getCurrentUserProfile } from 'frontend/graphql/queries/currentUser/getCurrentUserProfile'

export default compose(
  getCurrentUserProfile,
  queryHandler({
    queries: ['currentUserProfileQuery']
  })
)(Header)
