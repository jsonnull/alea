/* @flow */
import React from 'react'
import Label from 'components/Label'
import { GreenButton, OutlineButton } from 'components/Button'
import styles from './style.css'
import type { Theme } from 'types'

type Props = {
  currentTheme: Theme,
  changeTheme: (Theme) => any
}

const ThemeSwitcher = (props: Props) => {
  const isLightTheme = props.currentTheme == 'light'
  const isDarkTheme = props.currentTheme == 'dark'

  const LightButton = isLightTheme ? GreenButton : OutlineButton
  const DarkButton = isDarkTheme ? GreenButton : OutlineButton

  return <div>
    <Label>Theme</Label>
    <div className={ styles.themeButtons }>
      <LightButton onClick={ () => props.changeTheme('light') }>
        Light
      </LightButton>
      <DarkButton onClick={ () => props.changeTheme('dark') }>
        Dark
      </DarkButton>
    </div>
  </div>
}

export default ThemeSwitcher
