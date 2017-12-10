// @flow
import { connect } from 'react-redux'
import Settings from 'components/Settings'
import { changeTheme, changeDisplayName } from 'actions'
import { PERFORM_USER_LOGOUT, HIDE_SETTINGS } from 'actions/types'
import displayNameSelector from 'selectors/displayName'
import * as themes from 'styles/themes'
import type { ThemeName } from 'types'
import type { Theme } from 'styles/themes'
import type { State } from 'store'

export type StateProps = {
  theme: Theme,
  displayName: string,
  currentUserId: string | null,
  showSettings: boolean
}
const mapStateToProps = (state: State): StateProps => ({
  theme: themes[state.preferences.theme],
  displayName: displayNameSelector(state),
  currentUserId: state.currentUser.id,
  showSettings: state.ui.showSettings
})

export type DispatchProps = {
  changeTheme: (theme: ThemeName) => void,
  changeDisplayName: (name: string) => void,
  logout: Function,
  dismissSettings: Function
}
const mapDispatchToProps = (dispatch: Function) => ({
  changeTheme: (theme: ThemeName) => dispatch(changeTheme(theme)),
  changeDisplayName: (id: string, name: string) =>
    dispatch(changeDisplayName(id, name)),
  logout: () => dispatch({ type: PERFORM_USER_LOGOUT }),
  dismissSettings: () => dispatch({ type: HIDE_SETTINGS })
})

const mergeProps = (stateProps: StateProps, dispatchProps: Object) => ({
  ...stateProps,
  ...dispatchProps,
  changeDisplayName: (name: string) => {
    const { currentUserId } = stateProps
    if (currentUserId) {
      dispatchProps.changeDisplayName(currentUserId, name)
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  Settings
)
