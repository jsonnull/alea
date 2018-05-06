// @flow
import React from 'react'
import styled from 'styled-components'
import Tooltip from '../Tooltip'
import { fontSize } from 'frontend/styles/common'
import { PinIcon, UnpinIcon } from 'frontend/components/icon'

const Container = styled.div`
  background-color: ${props =>
    props.isPinned ? props.theme.background : props.theme.backgroundInverted};
  display: flex;
  flex-direction: row;
`

const Toggle = styled.div`
  display: block;
  font-size: ${fontSize.small};
  color: ${props =>
    props.isPinned ? props.theme.color : props.theme.colorInverted};
  margin-right: 1rem;
  padding-left: 1rem;
  cursor: pointer;

  i {
    transform: ${props => (props.isPinned ? 'none' : 'rotate(45deg)')};
  }
`

const Outer = styled.div`
  margin-left: auto;
`

type Props = {
  isPinned: boolean,
  setChatPinned: Function
}

const Header = (props: Props) => {
  const { isPinned, setChatPinned } = props

  const tooltip = isPinned ? 'Unpin Chat' : 'Pin Chat'

  return (
    <Container isPinned={isPinned}>
      <Outer>
        <Tooltip placement="left" content={tooltip}>
          <Toggle onClick={() => setChatPinned(!isPinned)} isPinned={isPinned}>
            {isPinned ? <UnpinIcon /> : <PinIcon />}
          </Toggle>
        </Tooltip>
      </Outer>
    </Container>
  )
}

export default Header
