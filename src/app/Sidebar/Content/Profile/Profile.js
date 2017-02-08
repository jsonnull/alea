import React from 'react'
import { connect } from 'react-redux'
import Editable from 'app/components/Editable'
import {
  THEME_LIGHT,
  THEME_DARK,
  changeTheme,
  updateUserProfile,
  logout
} from 'actions'
import sidebarStyles from '../style.css'
import styles from './style.css'

const Label = props => <label className={ sidebarStyles.label }>{ props.children }</label>

const ThemeButtons = props => {
  const lightSelected = props.selected == THEME_LIGHT
    ? ' ' + styles.themeButtonSelected
    : ''
  const darkSelected = props.selected == THEME_DARK
    ? ' ' + styles.themeButtonSelected
    : ''

  return <div className={ styles.themeButtons }>
    <div className={ styles.themeButton + lightSelected }
      onClick={ () => props.changeThemeTo(THEME_LIGHT) }>
      Light
    </div>
    <div className={ styles.themeButton + darkSelected }
      onClick={ () => props.changeThemeTo(THEME_DARK) }>
      Dark
    </div>
  </div>
}

class Profile extends React.Component {
  updateProfileName (name) {
    let user = { displayName: name }
    this.props.updateUserProfile(user)
  }

  render () {
    return (
      <div className={ styles.container }>
        <h1 className={ sidebarStyles.header }>Settings</h1>

        <Label>Display Name:</Label>
        <Editable className={ sidebarStyles.field } value={this.props.displayName} onChange={val => this.updateProfileName(val)}/>

        <Label>Theme</Label>
        <ThemeButtons selected={ this.props.theme }
          changeThemeTo={ theme => this.props.updateTheme(theme) } />

        <button className={`${styles.button} ${styles.logout}`} type='button' onClick={() => this.props.logout() }>Logout</button>
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
