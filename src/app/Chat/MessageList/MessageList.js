/* @flow */
import React from 'react'
import MessageView from '../Message'
import type { Message } from 'types'
import styles from './style.css'

type Props = {
  messages: Array<Message>
}

export default class MessageList extends React.Component<*, Props, *> {
  constructor (props: Props) {
    super(props)
    // Every minute, update chat timestamps
    setInterval(() => this.forceUpdate(), 60000)
  }

  componentDidUpdate () {
    this.refs.scroll.scrollTop += 10000
  }

  render () {
    return <div className={ styles.messages } ref='scroll'>
      {this.props.messages.map(message =>  
        <MessageView key={message.key} message={message} />
      )}
      <div className={ styles.spacer }>&nbsp;</div>
    </div>
  }
}
