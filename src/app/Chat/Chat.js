/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Compose from './Compose'
import MessageList from './MessageList'
import TogglePin from './TogglePin'
import {
  sendMessage,
  toggleChatPin
} from 'actions'
import type { Message, Theme } from 'types'
import styles from './style.css'

type Props = {
  theme: Theme,
  messages: Array<Message>,
  pinned: boolean,
  sendMessage: Function,
  togglePinned: Function
}

class Chat extends React.Component {
  props: Props
  messageQueue: []

  sendMessage (text) {
    this.props.sendMessage(text.trim())
  }

  render () {
    let pinned = this.props.pinned? 'pinned' : 'unpinned'

    let messages = this.props.messages
    if (this.props.pinned == false) {
      messages = this.props.messages.slice(-4)
    }

    return (
      <div className={ styles.chat + ' ' + pinned }>
        <TogglePin pinned={this.props.pinned} togglePinned={this.props.togglePinned} />
        <MessageList messages={messages} />
        <Compose onSend={message => this.sendMessage(message)} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({
    messages: state.messages,
    pinned: state.user.preferences.chatPinned
  }, ownProps)
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    sendMessage: (message) => { dispatch(sendMessage(message)) },
    togglePinned: () => dispatch(toggleChatPin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
