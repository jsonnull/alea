// @flow
import { connect } from 'react-redux'
import { compose } from 'recompose'
import Header from 'frontend/components/Header'
// import queryHandler from 'frontend/components/queryHandler'
// import { getCurrentUserProfile } from 'frontend/graphql/queries/currentUser/getCurrentUserProfile'
import type { State } from 'frontend/store'

const mapStateToProps = (state: State) => ({
  userIsLoggedIn: state.currentUser.id !== null
})

export default compose(
  connect(mapStateToProps, {})
  // getCurrentUserProfile,
  // queryHandler({
  // queries: ['currentUserProfileQuery']
  // })
)(Header)
