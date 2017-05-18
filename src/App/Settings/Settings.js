/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Name from './Name'
import ThemeSwitcher from './ThemeSwitcher'
import Logout from './Logout'
import { changeTheme, changeDisplayName } from 'actions'
import type { Theme } from 'types'
import type { State } from 'store'
import styles from './style.css'

type Props = {
  displayName: string,
  theme: Theme,
  changeTheme: Function,
  changeDisplayName: Function,
  logout: Function,
  hideSettings: Function
}

class Settings extends React.Component {
  props: Props

  updateProfileName = (name) => {
    this.props.changeDisplayName(name)
  }

  changeTheme = theme => this.props.changeTheme(theme)

  logout = () => this.props.logout()

  handleWrapperClick = this.props.hideSettings
  handleInnerClick = (e) => {
    e.stopPropagation()
  }

  render () {
    const { displayName, theme } = this.props

    return (
      <div className={styles.settingsOuter} onClick={this.handleWrapperClick}>
        <div className={styles.settings} onClick={this.handleInnerClick}>
          <Name name={displayName} onChange={this.updateProfileName} />

          <ThemeSwitcher
            currentTheme={theme}
            changeTheme={this.changeTheme}
          />

          <Logout logout={this.logout}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: State, ownProps) => {
  return Object.assign({
    displayName: state.user.profile.displayName,
    theme: state.user.preferences.theme,
    showSettings: state.ui.showSettings
  }, ownProps)
}

const mapDispatchToProps = (dispatch: Function) => ({
  changeTheme: (theme: Theme) => dispatch(changeTheme(theme)),
  changeDisplayName: (name: string) => dispatch(changeDisplayName(name)),
  logout: () => dispatch({ type: 'LOGOUT' }),
  hideSettings: () => dispatch({ type: 'HIDE_SETTINGS' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
