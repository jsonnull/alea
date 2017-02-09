/* @flow */
import React from 'react'
import type { Message } from 'types'
import MessageResult from './MessageResult'
import timeago from 'timeago.js'
import styles from './style.css'

export default class MessageView extends React.Component {
  props: Message

  render () {
    return <div className={styles.message}>
      <div className={styles.from}>
        { this.props.from }{' '}
        <span className={styles.date}>
          { new timeago().format(this.props.timestamp) }
        </span>
      </div>
      <div className={styles.text}>
        { this.props.text }
      </div>
      <MessageResult result={this.props.result} />
    </div>
  }
}
