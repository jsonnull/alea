/* @flow */
import React from 'react'
import Item from './Item'
import type { SessionInfo } from 'types'

type SessionInfoMap = { [key: string]: SessionInfo }

type Props = {
  currentSession: string,
  sessions: SessionInfoMap,
  setSession: Function
}

/*
 * Current way to type Object.values requires typecast to desired type through any
 * See https://github.com/facebook/flow/issues/2174
 * FIXME
 */
function sessionInfoToArray (sessions: SessionInfoMap): Array<[string, SessionInfo]> {
  let arr: any = Object.entries(sessions)
  arr = (arr: Array<[string, SessionInfo]>)
  return arr
}

const List = (props: Props) => {
  const sessions = sessionInfoToArray(props.sessions)

  if (sessions.length === 0) {
    return <p>
      {"Yikes, looks like you're not a member of any games. Want to start one?"}
    </p>
  }

  return <div>
    {sessions.map(([key, session]) => (
      <Item key={key}
        isCurrent={(session.sessionId == props.currentSession)}
        session={session}
        setSession={props.setSession} />
    ))}
  </div>
}

export default List
