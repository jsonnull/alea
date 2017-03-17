/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { Firebase, firebaseInject } from 'backend'
import Header from '../Header'
import Name from './Name'
import ThemeSwitcher from './ThemeSwitcher'
import Logout from './Logout'
import type { Theme } from 'types'
import type { State } from 'store'
import sidebarStyles from '../style.css'

type Props = {
  displayName: string,
  theme: Theme,
  firebase: Firebase
}

class Profile extends React.Component {
  props: Props

  updateProfileName = (name) => {
    let user = { displayName: name }
    this.props.firebase.updateUserProfile(user)
  }

  changeTheme = theme => this.props.firebase.changeTheme(theme)

  logout = () => this.props.firebase.logout()

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

export default connect(mapStateToProps)(firebaseInject(Profile))
