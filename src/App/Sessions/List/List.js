/* @flow */
import React from 'react'
import Item from './Item'
import type { SessionInfo } from 'types'
import styles from './style.css'

type Props = {
  sessions: Array<SessionInfo>,
  setSession: Function
}

const List = (props: Props) => {
  const sessions = props.sessions

  if (sessions.length === 0) {
    return <div className={styles.emptyList}>
      {"Yikes, looks like you're not a member of any games. Want to start one?"}
    </div>
  }

  return <div className={styles.list}>
    {sessions.map(session => (
      <Item key={session.sessionId}
        isCurrent={false}
        session={session}
        setSession={props.setSession} />
    ))}
  </div>
}

export default List
