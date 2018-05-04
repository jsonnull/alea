// @flow
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'
import performLogin from 'frontend/firebase/login'
import Login from 'frontend/components/Login'
import type { State } from 'frontend/store'

const mapStateToProps = (state: State) => ({
  userId: state.currentUser.id
})

export default compose(
  connect(mapStateToProps, {}),
  withProps({ performLogin })
)(Login)
