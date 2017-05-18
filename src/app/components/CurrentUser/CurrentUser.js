/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import ChatPin from './ChatPin'
import styles from './style.css'

type Props = {
  showPin: boolean,
  username: string,
  chatPinned: boolean,
  showSettings: Function,
  toggleChatPin: Function
}

class CurrentUser extends React.Component<*, Props, *> {
  render () {
    const { showPin = false, username, chatPinned, showSettings, toggleChatPin } = this.props

    const chatPin = (showPin)
      ? <ChatPin pinned={chatPinned} togglePinned={toggleChatPin} />
      : null

    return (
      <div className={styles.container}>
        { chatPin }
        <div className={styles.username}>
          { username }
        </div>
        <div className={styles.settings} onClick={showSettings}>
          <i className={`fa fa-cog`}></i>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: State, ownProps) => ({
  username: state.user.profile.displayName,
  chatPinned: state.user.preferences.chatPinned
})

const mapDispatchToProps = (dispatch: Function) => ({
  showSettings: () => dispatch({ type: 'SHOW_SETTINGS' }),
  toggleChatPin: () => dispatch({ type: 'TOGGLE_CHAT_PIN' })
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUser)
