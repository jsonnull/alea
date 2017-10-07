/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { withTheme } from 'styled-components'
import Settings from 'components/Settings'
import { changeTheme, changeDisplayName } from 'actions'
import type { ThemeName } from 'types'
import type { State } from 'store'

export type StateProps = {
  displayName: string,
  showSettings: boolean
}
const mapStateToProps = (state: State): StateProps => ({
  displayName: state.user.profile.displayName,
  showSettings: state.ui.showSettings
})

export type DispatchProps = {
  changeTheme: (theme: ThemeName) => void,
  changeDisplayName: (name: string) => void,
  logout: Function,
  dismissSettings: Function
}
const mapDispatchToProps = (dispatch: Function): DispatchProps => ({
  changeTheme: (theme: ThemeName) => dispatch(changeTheme(theme)),
  changeDisplayName: (name: string) => dispatch(changeDisplayName(name)),
  logout: () => dispatch({ type: 'LOGOUT' }),
  dismissSettings: () => dispatch({ type: 'HIDE_SETTINGS' })
})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Settings))
