/* @flow */
import React from 'react'
import CurrentUser from 'App/components/CurrentUser'
import SettingsButton from 'App/components/SettingsButton'
import ToggleChat from 'App/components/ToggleChat'
import styles from './style.css'

type Props = {
}

class User extends React.Component<*, Props, *> {
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.pin}>
          <ToggleChat />
        </div>
        <div className={styles.user}>
          <CurrentUser />
        </div>
        <div className={styles.settings}>
          <SettingsButton />
        </div>
      </div>
    )
  }
}

export default User
