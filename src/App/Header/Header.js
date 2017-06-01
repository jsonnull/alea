/* @flow */
import React from 'react'
import Home from './Home'
import CurrentUser from './CurrentUser'
import styles from './style.css'

type Props = {
  showTitle?: boolean,
}

class Header extends React.Component<*, Props, *> {
  render () {
    const { showTitle = false } = this.props

    return (
      <div className={styles.header}>
        <Home showTitle={showTitle} />
        <CurrentUser />
      </div>
    )
  }
}

export default Header
