/* @flow */
import React from 'react'
import Item from './Item'
import styles from './style.css'

type Props = {
  sessions: Array<Object>,
  setSession: Function
}

const List = (props: Props) => {
  if (props.sessions.length == 0) {
    return <p>
      Yikes, looks like you're not a member of any games. Want to start one?
    </p>
  }

  return <div>
    {props.sessions.map(session => (
      <Item key={session.key} session={session} setSession={props.setSession}/>
    ))}
  </div>
}

export default List

