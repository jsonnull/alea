/* @flow */
import React from 'react'
import styles from './style.css'

type Props = {
  pinned: boolean,
  togglePinned: Function
}

const ChatPin = (props: Props) => {
  const { pinned, togglePinned } = props

  let toggleChat = (pinned)
    ? <i className='fa fa-chevron-right'></i>
    : <i className='fa fa-chevron-left'></i>

  return (
    <div
      className={ styles.button }
      onClick={togglePinned}
    >
      { toggleChat }
    </div>
  )
}

export default ChatPin
