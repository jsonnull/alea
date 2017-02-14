/* @flow */
import React from 'react'
import styles from './style.css'

type Props = {
  session: Object,
  setSession: Function
}

const Item = (props: Props) => {
  if (!props.session.name) {
    return (
      <div>
        <i className={`fa fa-circle-o-notch fa-spin fa-fw ${styles.waitingIcon}`}></i>
        {' '}
        <span>Retrieving game info...</span>
      </div>
    )
  }

  return (
    <div className={styles.session}>
      {props.session.name}
    </div>
  )
}

export default Item
