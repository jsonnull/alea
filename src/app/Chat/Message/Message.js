/* @flow */
import React from 'react'
import timeago from 'timeago.js'
import styles from './style.css'

export default class Message extends React.Component {
  render () {
    let Content
    if (this.props.result) {
      Content = <div className={styles.messageResult}>
        { JSON.stringify(this.props.result) }
      </div>
    } else {
      Content = <div className={styles.messageText}>
        { this.props.text }
      </div>
    }

    return <div className={styles.message}>
      <div className={styles.messageFrom}>
        { this.props.from }{' '}
        <span className={styles.messageFromDate}>
          { new timeago().format(this.props.timestamp) }
        </span>
      </div>
      {Content}
    </div>
  }
}
