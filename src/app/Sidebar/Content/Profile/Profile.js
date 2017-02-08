/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
import Name from './Name'
import ThemeSwitcher from './ThemeSwitcher'
import Logout from './Logout'
import {
  changeTheme,
  updateUserProfile,
  logout
} from 'actions'
import sidebarStyles from '../style.css'

type Props = {
  displayName: string,
  theme: string,
  logout: Function,
  updateTheme: Function,
  updateUserProfile: Function
}

class Profile extends React.Component {
  props: Props

  updateProfileName (name) {
    let user = { displayName: name }
    this.props.updateUserProfile(user)
  }

  render () {
    return (
      <div className={ sidebarStyles.inner }>
        <Header>Settings</Header>

        <Name name={this.props.displayName} onChange={n => this.updateProfileName(n)} />

        <ThemeSwitcher
          currentTheme={ this.props.theme }
          changeTheme={theme => this.props.updateTheme(theme)}
        />

        <Logout logout={() => this.props.logout}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({
    displayName: state.user.profile.displayName,
    theme: state.user.preferences.theme
  }, ownProps)
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    updateTheme: theme => dispatch(changeTheme(theme)),
    updateUserProfile: user => dispatch(updateUserProfile(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
