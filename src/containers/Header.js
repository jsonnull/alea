// @flow
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Header from 'components/Header'
import { SHOW_SETTINGS } from 'actions/types'
import type { State } from 'store'
import displayNameSelector from 'selectors/displayName'

type StateProps = {
  username: string | null
}
const mapStateToProps = (state: State): StateProps => ({
  username: displayNameSelector(state),
  userIsLoggedIn: state => state.currentUser.id !== null
})

type DispatchProps = {
  goHome: Function,
  showLogin: Function,
  showSettings: Function
}
const mapDispatchToProps = (dispatch: Function): DispatchProps => ({
  goHome: () => dispatch(push('/')),
  showLogin: () => dispatch(push('/login')),
  showSettings: () => dispatch({ type: SHOW_SETTINGS })
})

const mergeProps = (stateProps, dispatchProps) => {
  return {
    ...dispatchProps,
    username: stateProps.userIsLoggedIn ? stateProps.username : null
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Header)
