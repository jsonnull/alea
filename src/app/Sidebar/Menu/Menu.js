/* @flow */
import React from 'react'
import MenuItem from './MenuItem'
import styles from './style.css'

type Props = {
  tab: string,
  changeTab: Function
}

const buttons = [
  ['Session', 'fa-globe'],
  ['Character', 'fa-id-card-o'],
  ['Profile', 'fa-cog']
]

export default class Menu extends React.Component {
  props: Props

  render () {
    return (
      <div className={ styles.menu }>
        {buttons.map(button =>
          {
            const [name, icon] = button
            const selected = name == this.props.tab
            return <MenuItem
              key={name}
              name={name}
              icon={icon}
              selected={selected}
              action={this.props.changeTab}
            />
          }
        )}
      </div>
    )
  }
}
