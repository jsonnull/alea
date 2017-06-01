/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Compose from './Compose'
import MessageList from './MessageList'
import { sendMessage } from 'actions'
import type { Message, Theme } from 'types'
import type { State } from 'store'
import styles from './style.css'

type Props = {
  theme: Theme,
  messages: Array<Message>,
  pinned: boolean,
  toggleChatPin: Function,
  sendMessage: Function
}

class Chat extends React.Component {
  props: Props
  messageQueue: []

  sendMessage = (text) => {
    this.props.sendMessage(text.trim())
  }

  render () {
    let pinned = this.props.pinned ? 'pinned' : 'unpinned'

    let messages = this.props.messages
    if (this.props.pinned == false) {
      messages = this.props.messages.slice(-4)
    }

    return (
      <div className={ styles.chat + ' ' + pinned }>
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

const mapDispatchToProps = (dispatch: Function) => ({
  sendMessage: (text: string) => dispatch(sendMessage(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
