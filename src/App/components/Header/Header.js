/* @flow */
import React from 'react'
import Home from './Home'
import styles from './style.css'

type Props = {
  showTitle?: boolean,
  children?: Object
}

class Header extends React.Component<*, Props, *> {
  render () {
    const { showTitle = false, children } = this.props

    return (
      <div className={styles.header}>
        <Home showTitle={showTitle} />
        { children }
      </div>
    )
  }
}

export default Header
