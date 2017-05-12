/* @flow */
import React from 'react'
import styles from './style.css'

type Props = {
  pinned: boolean,
  togglePinned: Function
}

const TogglePin = (props: Props) => {
  const { pinned } = props

  let toggleChat = (pinned == true)
    ? <i className='fa fa-chevron-down'></i>
    : <i className='fa fa-ellipsis-h'></i>

  return (
    <div className={ styles.button }
      onClick={() => { props.togglePinned() }}>
      { toggleChat }
    </div>
  )
}

export default TogglePin
