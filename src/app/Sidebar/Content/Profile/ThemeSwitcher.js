/* @flow */
import React from 'react'
import Label from '../Label'
import Button from 'app/components/Button'
import styles from './style.css'
import type { Theme } from 'types'

type ButtonProps = {
  selected: boolean,
  onClick: Function
}
const ThemeButton = (props: Object) => {
  let variant = (props.selected)? 'green' : 'outline'
  return <Button
      customClass={styles.themeButton}
      variant={variant}
      onClick={() => props.onClick()}>
    { props.children }
  </Button>
}

type Props = {
  currentTheme: Theme,
  changeTheme: (Theme) => void
}

const ThemeSwitcher = (props: Props) => {
  return <div>
    <Label>Theme</Label>
    <div className={ styles.themeButtons }>
      <ThemeButton
          selected={ props.currentTheme == 'light' }
          onClick={ () => props.changeTheme('light') }>
        Light
      </ThemeButton>
      <ThemeButton
          selected={ props.currentTheme == 'dark' }
          onClick={ () => props.changeTheme('dark') }>
        Dark
      </ThemeButton>
    </div>
  </div>
}

export default ThemeSwitcher