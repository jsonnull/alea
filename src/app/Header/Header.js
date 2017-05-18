/* @flow */
import React from 'react'
import Home from 'App/components/Home'
import CurrentUser from 'App/components/CurrentUser'
import styles from './style.css'

type Props = {
}

class Header extends React.Component<*, Props, *> {
  render () {
    return (
      <div className={styles.header}>
        <Home />
        <CurrentUser />
      </div>
    )
  }
}

export default Header
