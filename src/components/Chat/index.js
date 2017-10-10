/* @flow */
import React from 'react'
import styled from 'styled-components'
import Compose from './Compose'
import MessageList from './MessageList'
import type { Message } from 'types'

const CHAT_WIDTH = '320px'
const Container = styled.div`
  background-color: ${props => props.theme.background};
  width: ${props => props.chatWidth};
  position: relative;
  overflow: hidden;
  padding-top: 6rem;

  display: flex;
  flex-direction: column;
  margin-left: auto;

  /*
  &:global(.unpinned) {
    margin-top: auto;
    background: transparent;
    border-color: transparent;
    align-self: flex-end;
  }
  */
`

type Props = {
  messages: Array<Message>,
  pinned: boolean,
  toggleChatPin: Function,
  sendMessage: Function
}

class Chat extends React.Component<Props> {
  messageQueue: []

  sendMessage = (text: string) => {
    this.props.sendMessage(text.trim())
  }

  render() {
    let pinned = this.props.pinned ? 'pinned' : 'unpinned'

    let messages = this.props.messages
    if (this.props.pinned == false) {
      messages = this.props.messages.slice(-4)
    }

    return (
      <Container chatWidth={CHAT_WIDTH}>
        <MessageList messages={messages} />
        <Compose onSend={this.sendMessage} />
      </Container>
    )
  }
}

export default Chat
