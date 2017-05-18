/* @flow */
import React from 'react'
import Home from 'App/components/Home'
import CurrentUser from 'App/components/CurrentUser'
import SettingsButton from 'App/components/SettingsButton'
import styles from './style.css'

type Props = {
  showTitle: boolean
}

class Header extends React.Component<*, Props, *> {
  render () {
    const { showTitle = false } = this.props

    const title = showTitle
      ? <div className={styles.title}>Aleamancer</div>
      : null

    return (
      <div className={styles.header}>
        <Home />
        { title }
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

export default Header
