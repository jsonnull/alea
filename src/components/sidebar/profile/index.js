import React from 'react'
import { connect } from 'react-redux'
import {
  THEME_LIGHT,
  THEME_DARK,
  changeTheme,
  logout
} from '../../../actions/'
import styles from './style.css'

const Label = props => <label className={ styles.label }>{ props.children }</label>

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
  constructor (props) {
    super(props)
    this.state = { displayName: this.props.displayName }
  }

  handleName (event) {
    this.setState({ displayName: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.firebase.updateDisplayName(
      this.state.displayName
    )
  }

  render () {
    return (
      <div className={ styles.container }>
        <h1 className={ styles.header }>Settings</h1>
        <Label>Display Name:</Label>
        <input
          className={ styles.field }
          type='text'
          value={this.state.displayName}
          onChange={e => this.handleName(e)}
        />
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
    updateTheme: theme => dispatch(changeTheme(theme))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
