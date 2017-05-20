/* @flow */
import React from 'react'
import Home from './Home'
import styles from './style.css'

type Props = {
  children?: Object
}

class Header extends React.Component<*, Props, *> {
  render () {
    const { children } = this.props

    return (
      <div className={styles.header}>
        <Home />
        { children }
      </div>
    )
  }
}

export default Header
