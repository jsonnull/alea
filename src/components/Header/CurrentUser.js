// @flow
import React from 'react'
import Button from './Button'
import { fontSize } from 'styles/common'

const SmallButton = Button.extend`font-size: ${fontSize.small};`

type Props = {
  username: string
}

const CurrentUser = (props: Props) => {
  return <SmallButton>{props.username}</SmallButton>
}

export default CurrentUser
