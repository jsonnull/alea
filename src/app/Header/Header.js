/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import CurrentUser from './CurrentUser'
import styles from './style.css'

type Props = {
  showSettings: Function
}

class Header extends React.Component<*, Props, *> {
  render () {
    const { showSettings } = this.props

    return (
      <div className={styles.header}>
        <CurrentUser showSettings={showSettings} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  showSettings: () => dispatch({ type: 'SHOW_SETTINGS' })
})

export default connect(null, mapDispatchToProps)(Header)
