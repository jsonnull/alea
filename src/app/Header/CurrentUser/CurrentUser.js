/* @flow */
import React from 'react'
import styles from './style.css'

type Props = {
  showSettings: Function
}

class CurrentUser extends React.Component<*, Props, *> {
  render () {
    const { showSettings } = this.props

    return (
      <div className={styles.user}>
        <div className={styles.settings} onClick={showSettings}>
          <i className={`fa fa-cog`}></i>
        </div>
      </div>
    )
  }
}

export default CurrentUser
