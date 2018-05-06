// @flow
import React from 'react'
import Page from 'frontend/components/Page'
import Heading from 'frontend/components/Heading'
import Label from 'frontend/components/Label'
import Name from './Name'
import Avatar from './Avatar'
import { Row } from './styles'
import type { DBProfile } from 'common/types'

type Props = {
  isLoading: boolean,
  hasError: boolean,
  currentUser: {
    profile: DBProfile
  },
  setUsername: (name: string) => void,
  updateUserAvatar: (avatar: string) => void
}

const Settings = (props: Props) => {
  const { isLoading } = props
  if (isLoading) {
    return null
  }

  const { username, avatar } = props.currentUser.profile

  const { setUsername, updateUserAvatar } = props

  return (
    <Page>
      <Heading>Settings</Heading>
      <Row>
        <Label>Display Name</Label>
        <Name name={username} saveDisplayName={setUsername} />
      </Row>

      <Row>
        <Label>Avatar</Label>
        <Avatar avatar={avatar} updateUserAvatar={updateUserAvatar} />
      </Row>
    </Page>
  )
}

export default Settings
