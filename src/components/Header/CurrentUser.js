/* @flow */
import React from 'react'
import styled from 'styled-components'

const Username = styled.div`
  display: flex;
  margin-left: auto;
`

type Props = {
  username: string
}

const CurrentUser = (props: Props) => {
  return <Username>{props.username}</Username>
}

export default CurrentUser
