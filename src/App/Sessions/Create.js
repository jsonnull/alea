/* @flow */
import React from 'react'
// import Label from '../Label'
import Button from 'App/components/Button'
import styles from './style.css'

type Props = {
  createSession: Function
}

const Create = (props: Props) => {
  return <Button onClick={props.createSession} customClass={styles.create}>
    Create Game
  </Button>
}

export default Create
