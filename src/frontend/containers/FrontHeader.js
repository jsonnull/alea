// @flow
import { connect } from 'react-redux'
import FrontHeader from 'frontend/components/FrontHeader'
import type { State } from 'frontend/store'

const mapStateToProps = (state: State) => ({
  userIsLoggedIn: state.currentUser.id !== null
})

export default connect(mapStateToProps, {})(FrontHeader)
