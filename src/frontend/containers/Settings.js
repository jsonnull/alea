// @flow
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'
import Settings from 'frontend/components/Settings'
import { changeDisplayName, changeTheme } from 'frontend/actions'
import performLogout from 'frontend/firebase/logout'
import { HIDE_SETTINGS } from 'frontend/actions/types'
import displayNameSelector from 'frontend/selectors/displayName'
import * as themes from 'frontend/styles/themes'
import type { ThemeName } from 'common/types'
import type { State } from 'frontend/store'

const mapStateToProps = (state: State) => ({
  theme: themes[state.preferences.theme],
  displayName: displayNameSelector(state),
  showSettings: state.ui.showSettings
})

const mapDispatchToProps = (dispatch: Function) => ({
  changeTheme: (theme: ThemeName) => dispatch(changeTheme(theme)),
  changeDisplayName: (name: string) => dispatch(changeDisplayName(name)),
  dismissSettings: () => dispatch({ type: HIDE_SETTINGS })
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withProps({ performLogout })
)(Settings)
