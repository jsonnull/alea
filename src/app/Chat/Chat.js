/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Compose from './Compose'
import MessageList from './MessageList'
import TogglePin from './TogglePin'
import { Firebase, firebaseInject } from 'backend'
import type { Message, Theme } from 'types'
import type { State } from 'store'
import styles from './style.css'

type Props = {
  theme: Theme,
  messages: Array<Message>,
  pinned: boolean,
  firebase: Firebase
}

class Chat extends React.Component {
  props: Props
  messageQueue: []

  sendMessage = (text) => {
    this.props.firebase.sendMessage(text.trim())
  }

  togglePinned = () => {
    this.props.firebase.toggleChatPin()
  }

  render () {
    let pinned = this.props.pinned ? 'pinned' : 'unpinned'

    let messages = this.props.messages
    if (this.props.pinned == false) {
      messages = this.props.messages.slice(-4)
    }

    return (
      <div className={ styles.chat + ' ' + pinned }>
        <TogglePin pinned={this.props.pinned} togglePinned={this.togglePinned} />
        <MessageList messages={messages} />
        <Compose onSend={this.sendMessage} />
      </div>
    )
  }
}

const mapStateToProps = (state: State, ownProps) => {
  return Object.assign({
    messages: state.messages,
    pinned: state.user.preferences.chatPinned
  }, ownProps)
}

export default connect(mapStateToProps)(firebaseInject(Chat))
