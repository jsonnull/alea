// @flow
import React from 'react'
import styled from 'styled-components'
import Item from './ListItem'
import type { GetCurrentUserGamesType } from 'frontend/graphql/queries/currentUser/getCurrentUserGames'

const EmptyList = styled.div`
  margin: 2rem 0;
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-right: -1rem;
`

const Loading = () => <div>Loading...</div>

type Props = {
  loading: boolean,
  currentUser: { games?: Array<GetCurrentUserGamesType> }
}

const FullList = (props: Props) => {
  const { loading, currentUser } = props

  if (loading) {
    return <Loading />
  }

  const sessions = currentUser.games

  // FIXME:
  if (!sessions) {
    throw new Error('sessions was undefined')
  }

  if (sessions.length === 0) {
    return (
      <EmptyList>
        {
          "Yikes, looks like you're not a member of any games. Want to start one?"
        }
      </EmptyList>
    )
  }

  return (
    <List>
      {sessions.map(session => (
        <Item key={session.id} id={session.id} name={session.name} />
      ))}
    </List>
  )
}

export default FullList
