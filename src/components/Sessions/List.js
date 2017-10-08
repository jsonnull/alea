/* @flow */
import React from 'react'
import styled from 'styled-components'
import Item from './ListItem'
import type { SessionInfo } from 'types'

const EmptyList = styled.div`margin: 2.4rem 0;`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1.2rem;
  margin-right: -1.2rem;
`

type Props = {
  sessions: Array<SessionInfo>,
  setSession: Function
}

const FullList = (props: Props) => {
  const sessions = props.sessions

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
        <Item
          key={session.sessionId}
          isCurrent={false}
          session={session}
          setSession={props.setSession}
        />
      ))}
    </List>
  )
}

export default FullList
