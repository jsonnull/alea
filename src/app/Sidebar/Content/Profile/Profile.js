/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
import Name from './Name'
import ThemeSwitcher from './ThemeSwitcher'
import Logout from './Logout'
import { changeTheme, changeDisplayName } from 'actions'
import type { Theme } from 'types'
import type { State } from 'store'
import sidebarStyles from '../style.css'

type Props = {
  displayName: string,
  theme: Theme,
  changeTheme: Function,
  changeDisplayName: Function,
  logout: Function
}

class Profile extends React.Component {
  props: Props

  updateProfileName = (name) => {
    this.props.changeDisplayName(name)
  }

  changeTheme = theme => this.props.changeTheme(theme)

  logout = () => this.props.logout()

  render () {
    return (
      <div className={ sidebarStyles.inner }>
        <Header>Settings</Header>

        <Name name={this.props.displayName} onChange={this.updateProfileName} />

        <ThemeSwitcher
          currentTheme={ this.props.theme }
          changeTheme={this.changeTheme}
        />

        <Logout logout={this.logout}/>
      </div>
    )
  }
}

const mapStateToProps = (state: State, ownProps) => {
  return Object.assign({
    displayName: state.user.profile.displayName,
    theme: state.user.preferences.theme
  }, ownProps)
}

const mapDispatchToProps = (dispatch: Function) => ({
  changeTheme: (theme: Theme) => dispatch(changeTheme(theme)),
  changeDisplayName: (name: string) => dispatch(changeDisplayName(name)),
  logout: () => dispatch({ type: 'LOGOUT' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
