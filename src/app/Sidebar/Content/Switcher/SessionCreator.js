/* @flow */
import React from 'react'
import Label from '../Label'
import Button from 'app/components/Button'
import styles from './style.css'

type Props = {
  createSession: Function
}

const SessionCreator = (props: Props) => {
  return <div className={styles.create}>
    <Button onClick={props.createSession}>
      Create Game
    </Button>
  </div>
}

export default SessionCreator

