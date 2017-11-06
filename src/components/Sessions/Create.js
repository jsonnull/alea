// @flow
import React from 'react'
import Button from 'components/Button'

type Props = {
  createSession: Function
}

const CreateButton = Button.extend`align-self: flex-start;`

const Create = (props: Props) => {
  return <CreateButton onClick={props.createSession}>Create Game</CreateButton>
}

export default Create
