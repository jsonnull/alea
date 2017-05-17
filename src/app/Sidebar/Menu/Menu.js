/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import selectSessionId from 'selectors/sessionId'
import MenuItem from './MenuItem'
import MenuSeparator from './MenuSeparator'
import type { Tab } from 'types'
import type { State } from 'store'
import styles from './style.css'

type Props = {
  tab: Tab,
  sessionId: ?string,
  changeTab: Function
}

type MenuButton = [Tab, string] | 'separator'

const buttons: Array<MenuButton> = [
  ['Session', 'fa-globe'],
  ['Character', 'fa-id-card-o'],
  'separator',
  ['Sessions', 'fa-exchange']
]

class Menu extends React.Component {
  props: Props

  render () {
    const { sessionId } = this.props
    let view = buttons

    if (!sessionId) {
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

const mapStateToProps = (state: State) => ({
  sessionId: selectSessionId(state)
})

export default connect(mapStateToProps)(Menu)
