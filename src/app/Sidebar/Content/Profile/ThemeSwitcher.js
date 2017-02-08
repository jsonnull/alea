/* @flow */
import React from 'react'
import Label from '../Label'
import styles from './style.css'
import type { Theme } from 'types'

type Props = {
  currentTheme: Theme,
  changeTheme: (Theme) => void
}

const ThemeSwitcher = (props: Props) => {
  const lightSelected = props.currentTheme == 'light'
    ? ' ' + styles.themeButtonSelected
    : ''
  const darkSelected = props.currentTheme == 'dark'
    ? ' ' + styles.themeButtonSelected
    : ''

  return <div>
    <Label>Theme</Label>
    <div className={ styles.themeButtons }>
      <div className={ styles.themeButton + lightSelected }
        onClick={ () => props.changeTheme('light') }>
        Light
      </div>
      <div className={ styles.themeButton + darkSelected }
        onClick={ () => props.changeTheme('dark') }>
        Dark
      </div>
    </div>
  </div>
}

export default ThemeSwitcher
