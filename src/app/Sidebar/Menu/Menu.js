/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import MenuItem from './MenuItem'
import MenuSeparator from './MenuSeparator'
import type { State } from 'types'
import styles from './style.css'

type Props = {
  tab: string,
  sessionActive: boolean,
  changeTab: Function
}

const buttons = [
  ['Session', 'fa-globe'],
  ['Character', 'fa-id-card-o'], 
  ['separator'],
  ['Sessions', 'fa-exchange'],
  ['Profile', 'fa-cog'],
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
          const [name, icon] = button
          const selected = name == this.props.tab

          if (name == 'separator') {
            return <MenuSeparator key={name}/>
          }

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

const mapStateToProps = (state, ownProps) => ({
  sessionActive: state.user.data.currentSession !== null,
  ...ownProps
})

export default connect(mapStateToProps)(Menu)
