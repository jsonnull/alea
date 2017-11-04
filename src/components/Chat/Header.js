/* @flow */
import React from 'react'
import styled from 'styled-components'
import { fontSize } from 'styles/common'

const Container = styled.div`
  background-color: ${props => props.theme.colorSecondary};
  display: flex;
  flex-direction: row;
`

const Toggle = styled.div`
  margin-left: auto;
  display: block;
  transform: ${props => (props.isPinned ? 'none' : 'rotate(45deg)')};
  font-size: ${fontSize.small};
  color: ${props => props.theme.background};
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
    <Container>
      <Toggle onClick={toggleChatPin} isPinned={isPinned}>
        {toggleChat}
      </Toggle>
    </Container>
  )
}

export default Header
