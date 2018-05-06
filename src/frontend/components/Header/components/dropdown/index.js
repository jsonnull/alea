// @flow
import * as React from 'react'
import onClickOutside from 'react-onclickoutside'
import { SettingsIcon } from 'frontend/components/icon'
import { Button, Menu, MenuNotch, MenuItem } from './styles'

type State = { isOpen: boolean }
class Dropdown extends React.Component<*, State> {
  state = { isOpen: false }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen })

  close = () => this.setState({ isOpen: false })

  handleClickOutside = () => this.close()

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.toggleOpen}>
          <SettingsIcon />
        </Button>
        {this.state.isOpen && (
          <Menu className="ignore-react-onclickoutside">
            <MenuNotch />
            <MenuItem to="/settings">Settings</MenuItem>
            <MenuItem to="/preferences">Preferences</MenuItem>
            <MenuItem to="/logout">Log out</MenuItem>
          </Menu>
        )}
      </React.Fragment>
    )
  }
}

export default onClickOutside(Dropdown)
