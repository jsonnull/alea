/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import styles from './style.css'

type Props = {
  showSettings: Function
}

class SettingsButton extends React.Component<*, Props, *> {
  render () {
    const { showSettings } = this.props
    return (
      <div className={styles.settings} onClick={showSettings}>
        <i className={`fa fa-cog`}></i>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  showSettings: () => dispatch({ type: 'SHOW_SETTINGS' })
})

export default connect(null, mapDispatchToProps)(SettingsButton)
