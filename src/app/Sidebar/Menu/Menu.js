/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import MenuItem from './MenuItem'
import MenuSeparator from './MenuSeparator'
import type { Tab } from 'types'
import type { State } from 'store'
import styles from './style.css'

type Props = {
  tab: Tab,
  sessionActive: boolean,
  changeTab: Function
}

type MenuButton = [Tab, string] | 'separator'

const buttons: Array<MenuButton> = [
  ['Session', 'fa-globe'],
  ['Character', 'fa-id-card-o'],
  'separator',
  ['Sessions', 'fa-exchange'],
  ['Profile', 'fa-cog']
]

class Menu extends React.Component {
  props: Props

  render () {
    let view = buttons

    if (!this.props.sessionActive) {
      view = buttons.slice(3)
    }

    return (
      <div className={ styles.menu }>
        {view.map(button => {
          if (button === 'separator') {
            return <MenuSeparator key={button}/>
          }

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

const mapStateToProps = (state: State, ownProps) => ({
  sessionActive: state.user.data.currentSession !== null,
  ...ownProps
})

export default connect(mapStateToProps)(Menu)
