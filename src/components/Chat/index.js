import React from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../../actions'
import styles from './style.css'

class Compose extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      height: 0
    }

    this.focused = false

    this.messageQueue = []
  }

  handleChange (event) {
    const value = event.target.value

    const setHeightImmediate = (value.length > this.state.value.length)

    this.setState({
      value
    })

    if (setHeightImmediate) {
      this.calculateHeight()
    } else {
      this.setState({ height: 0 })
      requestAnimationFrame(() => this.calculateHeight())
    }
  }

  calculateHeight () {
    const autogrow = this.refs.autogrow
    const scrollHeight = autogrow.scrollHeight 

    let height = 0
    if (scrollHeight !== 48) {
      height = scrollHeight + 2
    }

    this.setState({
      height
    })
  }

  handleKeyUp (event) {
    if (event.key == 'Enter') {
      this.handleSubmit()
    }
  }

  handleSubmit () {
    this.messageQueue.push(this.state.value)
    this.props.onSend(this.state.value)
    this.setState({
      value: '',
      height: 0
    })
  }

  render () {
    let style = {}
    if (this.state.height !== 0) {
      style = {
        height: this.state.height + 'px'
      }
    }

    return (
      <div
        className={ styles.form }
      >
        <textarea
          className={ styles.formInput }
          type='text'
          placeholder='Send a message...'
          value={ this.state.value }
          ref='autogrow'
          style={ style }
          onChange={e => this.handleChange(e)}
          onKeyUp={e => this.handleKeyUp(e)}
        />
      </div>
    )
  }
}

class Message extends React.Component {
  render () {
    return <div className={styles.message}>
      <div className={styles.messageFrom}>
        { this.props.from }
      </div>
      <div className={styles.messageText}>
        { this.props.text }
      </div>
      <div className={styles.messageResult}>
        { this.props.result }
      </div>
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

    let messages = this.props.messages
    if (this.props.pinned == false) {
      messages = this.props.messages.slice(-4)
    }

    return (
      <div className={ theme + ' ' + pinned }>
        <div className={ styles.chat }>
          <div className={ styles.chatScrollArea } ref='scroll'>
            {messages.map(message =>  
              <Message
                key={message.key}
                text={message.text}
                from={message.from}
                result={message.result}
              />
            )}
          </div>
          <Compose onSend={message => this.sendMessage(message)} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({
    messages: state.chat.messages,
    pinned: state.preferences.chatPinned
  }, ownProps)
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => { dispatch(sendMessage(message)) }
  }
}

const ChatMessages = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)

export default ChatMessages
