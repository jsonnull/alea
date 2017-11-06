// @flow
import React from 'react'
import { connect } from 'react-redux'
import Modal from 'components/Modal'
import Logout from 'components/Settings/Logout'
import Name from 'components/Settings/Name'
import ThemeSwitcher from 'components/Settings/ThemeSwitcher'
import type { Theme } from 'styles/themes'
import type { StateProps, DispatchProps } from 'containers/Settings'

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

export default Settings
