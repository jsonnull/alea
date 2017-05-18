/* @flow */
import React from 'react'
import Label from 'App/components/Label'
import Button from 'App/components/Button'
import styles from './style.css'
import type { Theme } from 'types'

// FIXME: Find a better way to annotate `children` in a way Flow accepts
type ButtonProps = {
  selected: boolean,
  onClick: Function,
  children?: any
}
const ThemeButton = (props: ButtonProps) => {
  let variant = (props.selected) ? 'green' : 'outline'
  return <Button
      customClass={styles.themeButton}
      variant={variant}
      onClick={() => props.onClick()}>
    { props.children }
  </Button>
}

type Props = {
  currentTheme: Theme,
  changeTheme: (Theme) => any
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
