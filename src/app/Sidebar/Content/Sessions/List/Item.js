/* @flow */
import React from 'react'
import styles from './style.css'

const Meta = (props: { isCurrent: boolean }) => {
  if (props.isCurrent) {
    return <div className={styles.tag}>Current</div>
  }

  return null
}

const Loading = () => (
  <div>
    <i className={`fa fa-circle-o-notch fa-spin fa-fw ${styles.waitingIcon}`}></i>
    {' '}
    <span>Retrieving game info...</span>
  </div>
)

type Props = {
  isCurrent: boolean,
  session: Object,
  setSession: Function
}

const Item = (props: Props) => {
  if (!props.session.name) {
    return <Loading />
  }

  let currentStyle = props.isCurrent ? ' ' + styles.current : ''

  return (
    <div className={styles.session + currentStyle}>
      <div className={styles.name}>
        {props.session.name}
      </div>
      <Meta isCurrent={props.isCurrent}/>
    </div>
  )
}

export default Item
