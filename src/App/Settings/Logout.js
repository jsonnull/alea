/* @flow */
import React from 'react'
import Button from 'App/components/Button'
import styles from './style.css'

type Props = {
  logout: Function
}

const Logout = (props: Props) => {
  return <Button onClick={props.logout} customClass={styles.logout} variant='red'>
    Logout
  </Button>
}

export default Logout
