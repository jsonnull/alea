import React from 'react'
import { connect } from 'react-redux'
import Compose from './compose'
import {
  sendMessage,
  toggleChatPin
} from '../../actions/'
import styles from './style.css'


class Message extends React.Component {
  render () {
    let Content
    if (this.props.result) {
      Content = <div className={styles.messageResult}>
        { this.props.result }
      </div>
    } else {
      Content = <div className={styles.messageText}>
        { this.props.text }
      </div>
    }

    return <div className={styles.message}>
      <div className={styles.messageFrom}>
        { this.props.from }
      </div>
      {Content}
    </div>
  }
}

class Chat extends React.Component {
  sendMessage (text) {
    // this.props.firebase.saveMessage(text)
    this.props.sendMessage(text.trim())
  }

  componentDidUpdate () {
    this.refs.scroll.scrollTop += 10000
  }

  render () {
    let theme = (this.props.theme == 'dark')? styles.darkTheme : ''
    let pinned = (this.props.pinned)? '' : styles.unpinned

    let toggleChat = (this.props.pinned == true)
      ? <i className='fa fa-chevron-down'></i>
      : <i className='fa fa-ellipsis-h'></i>

    let messages = this.props.messages
    if (this.props.pinned == false) {
      messages = this.props.messages.slice(-4)
    }

    return (
      <div className={ styles.chat + ' ' + theme + ' ' + pinned }>
        <div className={ styles.button }
          onClick={() => { this.props.togglePinned() }}>
          { toggleChat }
        </div>
        <div className={ styles.messages } ref='scroll'>
          {messages.map(message =>  
            <Message
              key={message.key}
              text={message.text}
              from={message.from}
              result={message.result}
            />
          )}
          <div className={ styles.spacer }>&nbsp;</div>
        </div>
        <Compose onSend={message => this.sendMessage(message)} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({
    messages: state.messages,
    pinned: state.user.preferences.chatPinned
  }, ownProps)
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => { dispatch(sendMessage(message)) },
    togglePinned: () => dispatch(toggleChatPin())
  }
}

const ChatMessages = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)

export default ChatMessages
