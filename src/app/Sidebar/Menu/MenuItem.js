/* @flow */
import React from 'react'
import styles from './style.css'

type Props = {
  name: string,
  icon: string,
  selected: boolean,
  action: Function
}

const MenuItem = (props: Props) => {
  const selected = props.selected
    ? ' ' + styles.menuItemSelected
    : ''

  return (
    <div className={ styles.menuItem + selected } onClick={ () => props.action(props.name) }>
      <i className={`fa ${props.icon}`}></i>
    </div>
  )
}

export default MenuItem
