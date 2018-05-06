// @flow
import * as React from 'react'
import styled from 'styled-components'
import type { Tab } from 'common/types'
import MenuItem from './MenuItem'
import { SessionIcon, CharacterIcon } from 'frontend/components/icon'

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 4.8rem;
  color: black;
  background-color: ${props =>
    props.theme.name === 'dark' ? props.theme.backgroundSecondary : ''};
`

type MenuButton = [Tab, React.ComponentType<any>]

const buttons: Array<MenuButton> = [
  ['Session', SessionIcon],
  ['Character', CharacterIcon]
]

type Props = {
  tab: Tab,
  changeTab: Function
}
class Menu extends React.Component<Props> {
  render() {
    return (
      <MenuContainer>
        {buttons.map(button => {
          const [name, icon] = button
          const selected = name == this.props.tab

          return (
            <MenuItem
              key={name}
              name={name}
              icon={icon}
              selected={selected}
              action={this.props.changeTab}
            />
          )
        })}
      </MenuContainer>
    )
  }
}

export default Menu
