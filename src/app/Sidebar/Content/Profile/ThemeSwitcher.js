/* @flow */
import React from 'react'
import Label from '../Label'
import {
  THEME_LIGHT,
  THEME_DARK
} from 'actions'
import styles from './style.css'

type Props = {
  currentTheme: string,
  changeTheme: Function
}

const ThemeSwitcher = (props: Props) => {
  const lightSelected = props.currentTheme == THEME_LIGHT
    ? ' ' + styles.themeButtonSelected
    : ''
  const darkSelected = props.currentTheme == THEME_DARK
    ? ' ' + styles.themeButtonSelected
    : ''

  return <div>
    <Label>Theme</Label>
    <div className={ styles.themeButtons }>
      <div className={ styles.themeButton + lightSelected }
        onClick={ () => props.changeTheme(THEME_LIGHT) }>
        Light
      </div>
      <div className={ styles.themeButton + darkSelected }
        onClick={ () => props.changeTheme(THEME_DARK) }>
        Dark
      </div>
    </div>
  </div>
}

export default ThemeSwitcher
