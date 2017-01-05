import React from 'react'
import Toolbar from './Toolbar'
import Sidebar from './Sidebar'
import Profile from './User'
import Chat from './Chat'
import Modal from './Modal'

export default class Frontend extends React.Component {
  render () {
    const theme = this.props.theme || 'light'
    return <div>
      <Sidebar theme={theme} />
      <Profile theme={theme} />
      <Chat theme={theme} />
      <Toolbar theme={theme} />
      <Modal theme={theme} />
    </div>
  }
}
