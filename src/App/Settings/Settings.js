/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import styled from 'styled-components'
import withTheme from 'containers/withTheme'
import type { ThemeProps } from 'containers/withTheme'
import Name from './Name'
import ThemeSwitcher from './ThemeSwitcher'
import Logout from './Logout'
import { changeTheme, changeDisplayName } from 'actions'
import * as themes from 'styles/themes'
import type { State } from 'store'

const withInteractions = compose(
  withTheme,
  connect(
    (state: State) => ({
      displayName: state.user.profile.displayName,
      showSettings: state.ui.showSettings
    }),
    (dispatch: Function) => ({
      changeTheme: (theme: Theme) => dispatch(changeTheme(theme)),
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
  changeTheme: Function,
  changeDisplayName: Function,
  logout: Function,
  hideSettings: Function
} & ThemeProps

const SettingsContainer = withTheme(styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0,
    ${props => props.theme === 'light' ? '0.5' : '0.7'}
  );
`)

const SettingsInner = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  border-radius: 5px;
  padding: 2.4rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  background-color: ${props => props.theme == 'light'
    ? 'white'
    : themes[props.theme].backgroundSecondary
  };
`)

const Settings = (props: Props) => (
  <SettingsContainer onClick={props.handleWrapperClick}>
    <SettingsInner onClick={props.handleInnerClick}>
      <Name name={props.displayName} onChange={props.updateProfileName} />

      <ThemeSwitcher
        currentTheme={props.theme}
        changeTheme={props.changeTheme}
      />

      <Logout logout={props.logout}/>
    </SettingsInner>
  </SettingsContainer>
)

export default withInteractions(Settings)
