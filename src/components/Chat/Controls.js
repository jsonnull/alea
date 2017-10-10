/* @flow */
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import type { State } from 'store'

const Toggle = styled.div`
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

type Props = {
  pinned: boolean,
  togglePinned: Function
}

const Controls = (props: Props) => {
  const { pinned, togglePinned } = props

  let toggleChat = pinned ? (
    <i className="fa fa-chevron-right" />
  ) : (
    <i className="fa fa-chevron-left" />
  )

  return <Toggle onClick={togglePinned}>{toggleChat}</Toggle>
}

export default Controls
