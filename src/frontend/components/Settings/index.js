// @flow
import React from 'react'
import Modal from '../Modal'
import Logout from './Logout'
import Name from './Name'
import ThemeSwitcher from './ThemeSwitcher'
import type { ThemeName } from 'common/types'
import type { Theme } from 'frontend/styles/themes'

type Props = {
  theme: Theme,
  performLogout: Function,
  changeTheme: (theme: ThemeName) => void,
  changeDisplayName: (name: string) => void,
  dismissSettings: Function,
  displayName: string,
  showSettings: boolean
}

const Settings = (props: Props) => {
  const {
    showSettings,
    displayName,
    changeDisplayName,
    theme,
    changeTheme,
    performLogout,
    dismissSettings
  } = props

  return (
    <Modal show={showSettings} dismiss={dismissSettings}>
      {() => (
        <div>
          <Name name={displayName} onChange={changeDisplayName} />

          <ThemeSwitcher currentTheme={theme.name} changeTheme={changeTheme} />

          <Logout performLogout={performLogout} />
        </div>
      )}
    </Modal>
  )
}

export default Settings
