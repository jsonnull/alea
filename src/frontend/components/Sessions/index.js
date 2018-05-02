// @flow
import React from 'react'
import Create from './Create'
import List from './List'
import Page from 'frontend/components/Page'
import Heading from 'frontend/components/Heading'
import type { GetCurrentUserGamesType } from 'frontend/graphql/queries/currentUser/getCurrentUserGames'

type Props = {
  isLoading: boolean,
  hasError: boolean,
  currentUser: { games?: Array<GetCurrentUserGamesType> }
}

const Sessions = (props: Props) => {
  const { isLoading, currentUser } = props

  return (
    <Page>
      <Heading>Your Games</Heading>
      <List loading={isLoading} currentUser={currentUser} />
      <Create createSession={() => {}} />
    </Page>
  )
}

export default Sessions
