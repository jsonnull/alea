/* @flow */
import React from 'react'
import CurrentUser from 'App/components/CurrentUser'
import styles from './style.css'

type Props = {
}

class Header extends React.Component<*, Props, *> {
  render () {
    return (
      <div className={styles.header}>
        <CurrentUser />
      </div>
    )
  }
}

export default Header
