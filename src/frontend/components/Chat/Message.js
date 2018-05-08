// @flow
import React from 'react'
import styled from 'styled-components'
import { fontSize } from 'frontend/styles/common'
import MessageResult from './MessageResult'
import formatDate from './formatDate'
import type { Message } from 'common/types'

type Props = {
  username: string,
  avatar: ?string,
  message: Message
}

const MessageContainer = styled.div`
  flex: 0;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.color};

  &:first-child {
    margin-top: auto;
  }
`

const AvatarArea = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${props => props.theme.borderColor};
  border-radius: 4px;
`

const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 4px;
`

const MessageBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  line-height: 2rem;
`

const From = styled.div`
  font-weight: 700;
  font-size: ${fontSize.normal};
  color: ${props => props.theme.colorSecondary};
  line-height: 1.4rem;
  margin-bottom: 0.6rem;
`

const Sent = styled.span`
  color: #999;
  font-weight: normal;
  margin-left: 3px;
`

const Text = styled.div`
  padding: 0;
  color: ${props => props.theme.color};
`

export default class MessageView extends React.Component<Props> {
  render() {
    const { username, avatar } = this.props
    const { timestamp, text, result } = this.props.message
    const hoverText = new Date(timestamp)
    const formattedDate = formatDate(timestamp)

    return (
      <MessageContainer>
        <AvatarArea>{avatar && <Avatar src={avatar} />}</AvatarArea>
        <MessageBody>
          <From>
            {username} <Sent title={hoverText}>{formattedDate}</Sent>
          </From>
          <Text>{text}</Text>
          <MessageResult result={result} />
        </MessageBody>
      </MessageContainer>
    )
  }
}
