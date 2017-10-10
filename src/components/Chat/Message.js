/* @flow */
import React from 'react'
import styled from 'styled-components'
import type { Message } from 'types'
import MessageResult from './MessageResult'
import Timeago from 'timeago.js'

type Props = {
  message: Message
}

const MessageContainer = styled.div`
  margin: 0.5rem 0 0;
  padding: 0 0 0.5rem;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  display: inline-block;
  width: 100%;
  min-width: 160px;
  background-color: ${props => props.theme.background};

  &:first-child {
    margin-top: auto;
  }

  /* FIXME:
  :global(.unpinned) & {
    margin: 1rem 0 0;
    padding: 0;
    border-color: transparent;
    border-radius: 5px;
    background-color: $bgPrimary;
    width: auto;
    max-width: 250px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);

    :global(.dark) & {
      background-color: $bgPrimaryDark;
    }
  }
  */
`

const From = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  color: ${props => props.theme.backgroundSecondary};
  padding: 0.2rem 1rem 0;
`

const Sent = styled.span`
  color: #999;
  font-weight: normal;
  font-style: italic;
`

const Text = styled.div`padding: 0 1rem 0.2rem;`

export default class MessageView extends React.Component<Props> {
  render() {
    const { from, timestamp, text, result } = this.props.message
    const hoverText = new Date(timestamp)
    const formattedDate = new Timeago().format(timestamp)
    return (
      <MessageContainer>
        <From>
          {from} <Sent title={hoverText}>{formattedDate}</Sent>
        </From>
        <Text>{text}</Text>
        <MessageResult result={result} />
      </MessageContainer>
    )
  }
}
