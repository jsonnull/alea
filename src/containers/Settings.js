/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { withTheme } from 'styled-components'
import { compose } from 'recompose'
import Modal from 'components/Modal'
import Logout from 'components/Settings/Logout'
import Name from 'components/Settings/Name'
import ThemeSwitcher from 'components/Settings/ThemeSwitcher'
import { changeTheme, changeDisplayName } from 'actions'
import type { Theme } from 'styles/themes'
import type { ThemeName } from 'types'
import type { State } from 'store'

type Props = {
  theme: Theme
} & StateProps &
  DispatchProps

const Settings = (props: Props) => {
  const {
    displayName,
    changeDisplayName,
    theme,
    changeTheme,
    logout,
    dismissSettings
  } = props

  return (
    <Modal dismiss={dismissSettings}>
      {() => (
        <div>
          <Name name={displayName} onChange={changeDisplayName} />

          <ThemeSwitcher currentTheme={theme.name} changeTheme={changeTheme} />

          <Logout logout={logout} />
        </div>
      )}
    </Modal>
  )
}

type StateProps = {
  displayName: string,
  showSettings: boolean
}
const mapStateToProps = (state: State): StateProps => ({
  displayName: state.user.profile.displayName,
  showSettings: state.ui.showSettings
})

type DispatchProps = {
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

export default compose(connect(mapStateToProps, mapDispatchToProps), withTheme)(
  Settings
)
