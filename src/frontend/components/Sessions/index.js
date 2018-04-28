// @flow
import React from 'react'
import Create from './Create'
import List from './List'
import Page from 'frontend/components/Page'
import Heading from 'frontend/components/Heading'
import type { GetCurrentUserGamesType } from 'frontend/graphql/queries/currentUser/getCurrentUserGames'

type Props = {
  currentUserWithGames: {
    loading: boolean,
    error: ?string,
    currentUser: { games?: Array<GetCurrentUserGamesType> }
  },
  switchToSession: Function
}

const Sessions = (props: Props) => {
  const {
    currentUserWithGames: { loading, currentUser },
    switchToSession
  } = props

  return (
    <Page>
      <Heading>Your Games</Heading>
      <List
        loading={loading}
        currentUser={currentUser}
        setSession={switchToSession}
      />
      <Create createSession={() => {}} />
    </Page>
  )
}

export default Sessions
