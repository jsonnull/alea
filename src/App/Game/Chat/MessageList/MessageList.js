/* @flow */
import * as React from 'react'
import styled from 'styled-components'
import MessageView from '../Message'
import type { Message } from 'types'

const Messages = styled.div`
  padding: 0 1.2rem;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 315px;

  flex: 1;
  display: flex;
  flex-direction: column;

  /*
  :global(.unpinned) & {
    width: 300px;
    flex: none;
    align-items: flex-end;
    overflow: hidden;
  }
  */
`

const Spacer = styled.div`
  height: 5px;
  line-height: 5px;
  font-size: 5px;

  /*
  :global(.unpinned) & {
    height: 10px;
    line-height: 10px;
    font-size: 10px;
  }
  */
`

type Props = {
  messages: Array<Message>
}

export default class MessageList extends React.Component<Props> {
  timer: number
  scroll: ?HTMLElement

  componentDidMount() {
    // Every minute, update chat timestamps
    this.timer = setInterval(() => this.forceUpdate(), 60000)
  }

  componentDidUpdate() {
    if (this.scroll) {
      this.scroll.scrollTop += 10000
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <Messages
        ref={el => {
          this.scroll = el
        }}
      >
        {this.props.messages.map(message => (
          <MessageView key={message.key} message={message} />
        ))}
        <Spacer>&nbsp;</Spacer>
      </Messages>
    )
  }
}
