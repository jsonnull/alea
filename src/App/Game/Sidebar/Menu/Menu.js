/* @flow */
import React from 'react'
import Home from 'App/components/Home'
import MenuItem from './MenuItem'
import type { Tab } from 'types'
import styles from './style.css'

type Props = {
  tab: Tab,
  changeTab: Function
}

type MenuButton = [Tab, string] | 'separator'

const buttons: Array<MenuButton> = [
  ['Session', 'fa-globe'],
  ['Character', 'fa-id-card-o']
]

class Menu extends React.Component {
  props: Props

  render () {
    return (
      <div className={ styles.menu }>
        <Home />
        {buttons.map(button => {
          const [name, icon] = button
          const selected = name == this.props.tab

          return <MenuItem
            key={name}
            name={name}
            icon={icon}
            selected={selected}
            action={this.props.changeTab}
          />
        })}
      </div>
    )
  }
}

export default Menu
