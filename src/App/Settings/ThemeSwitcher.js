/* @flow */
import React from 'react'
import Label from 'components/Label'
import Button from 'components/Button'
import styles from './style.css'
import type { Theme } from 'types'

type Props = {
  currentTheme: Theme,
  changeTheme: (Theme) => any
}

const DarkButton = Button.extend`
  margin-left: 5px;
`

const ThemeSwitcher = (props: Props) => {
  const isLightTheme = props.currentTheme == 'light'
  const isDarkTheme = props.currentTheme == 'dark'

  const useGreen = { green: true }
  const useOutline = { outline: true }

  const lightButton = isLightTheme ? useGreen : useOutline
  const darkButton = isDarkTheme ? useGreen : useOutline

  return <div>
    <Label>Theme</Label>
    <div className={ styles.themeButtons }>
      <Button {...lightButton} onClick={ () => props.changeTheme('light') }>
        Light
      </Button>
      <DarkButton {...darkButton} onClick={ () => props.changeTheme('dark') }>
        Dark
      </DarkButton>
    </div>
  </div>
}

export default ThemeSwitcher
