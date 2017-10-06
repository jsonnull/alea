/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import styled, { withTheme } from 'styled-components'
import Name from './Name'
import ThemeSwitcher from './ThemeSwitcher'
import Logout from './Logout'
import { changeTheme, changeDisplayName } from 'actions'
import type { ThemeName } from 'types'
import type { State } from 'store'
import type { Theme } from 'styles/themes'

const withInteractions = compose(
  withTheme,
  connect(
    (state: State) => ({
      displayName: state.user.profile.displayName,
      showSettings: state.ui.showSettings
    }),
    (dispatch: Function) => ({
      changeTheme: (theme: ThemeName) => dispatch(changeTheme(theme)),
      changeDisplayName: (name: string) => dispatch(changeDisplayName(name)),
      logout: () => dispatch({ type: 'LOGOUT' }),
      hideSettings: () => dispatch({ type: 'HIDE_SETTINGS' })
    })
  ),
  withHandlers({
    changeTheme: props => theme => props.changeTheme(theme),
    updateProfileName: props => name => props.changeDisplayName(name),
    logout: props => props.logout,
    handleWrapperClick: props => props.hideSettings,
    handleInnerClick: () => e => e.stopPropagation()
  })
)

type Props = {
  displayName: string,
  hideSettings: Function,
  theme: Theme,
  changeTheme: Function,
  updateProfileName: Function,
  logout: Function,
  handleInnerClick: Function,
  handleWrapperClick: Function
}

const SettingsContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(
    0,
    0,
    0,
    ${props => (props.theme.name === 'light' ? '0.5' : '0.7')}
  );
`

const SettingsInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  border-radius: 5px;
  padding: 2.4rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  background-color: ${props =>
    props.theme.name == 'light' ? 'white' : props.theme.backgroundSecondary};
`

const Settings = (props: Props) => (
  <SettingsContainer onClick={props.handleWrapperClick}>
    <SettingsInner onClick={props.handleInnerClick}>
      <Name name={props.displayName} onChange={props.updateProfileName} />

      <ThemeSwitcher
        currentTheme={props.theme.name}
        changeTheme={props.changeTheme}
      />

      <Logout logout={props.logout} />
    </SettingsInner>
  </SettingsContainer>
)

export default withInteractions(Settings)
