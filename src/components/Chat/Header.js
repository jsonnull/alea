// @flow
import React from 'react'
import styled from 'styled-components'
import { fontSize } from 'styles/common'

const Container = styled.div`
  background-color: ${props =>
    props.isPinned ? props.theme.background : props.theme.backgroundInverted};
  display: flex;
  flex-direction: row;
`

const Toggle = styled.div`
  margin-left: auto;
  display: block;
  transform: ${props => (props.isPinned ? 'none' : 'rotate(45deg)')};
  font-size: ${fontSize.small};
  color: ${props =>
    props.isPinned ? props.theme.color : props.theme.colorInverted};
  margin-right: 1rem;
  cursor: pointer;
`

type Props = {
  isPinned: boolean,
  toggleChatPin: Function
}

const Header = (props: Props) => {
  const { isPinned, toggleChatPin } = props

  let toggleChat = isPinned ? (
    <i className="fa fa-chevron-left" />
  ) : (
    <i className="fa fa-thumb-tack" />
  )

  return (
    <Container isPinned={isPinned}>
      <Toggle onClick={toggleChatPin} isPinned={isPinned}>
        {toggleChat}
      </Toggle>
    </Container>
  )
}

export default Header
